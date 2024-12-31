import { createLazyFileRoute } from '@tanstack/react-router'

import { Input } from '../components/catalyst/input'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../components/catalyst/table'
import { Mosque } from '../models'

export const Route = createLazyFileRoute('/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className='p-4'>
      <h1 className='text-xl font-bold'>دليل المسجد</h1>

      <div className='mt-2'>
        <Input
          name='search'
          placeholder='ابحث عن المسجد'
          className='max-w-sm'
        />
      </div>

      <Table
        className='[--gutter:theme(spacing.4)] sm:[--gutter:theme(spacing.4)] [&_table]:text-start'
        striped
      >
        <TableHead>
          <TableRow>
            <TableHeader className='text-start'>اسم المسجد</TableHeader>
            <TableHeader className='text-start'>العنوان</TableHeader>
            <TableHeader className='text-start'>الموقع</TableHeader>
            {/* <TableHeader>Email</TableHeader>
            <TableHeader>Access</TableHeader> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {mosques.map((mosque) => (
            <TableRow key={mosque.id}>
              <TableCell className='font-medium'>{mosque.name}</TableCell>
              <TableCell>{mosque.address}</TableCell>
              <TableCell>
                <a
                  href={getGeoLink(
                    mosque.coordinates.latitude,
                    mosque.coordinates.longitude,
                    mosque.name,
                  )}
                  target='_blank'
                  rel='noreferrer'
                >
                  {mosque.coordinates.latitude},{mosque.coordinates.longitude}
                </a>
              </TableCell>
              {/* <TableCell>{mosque.email}</TableCell>
              <TableCell className='text-zinc-500'>{mosque.access}</TableCell> */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

function getGeoLink(latitude: number, longitude: number, name?: string) {
  const isAndroid = navigator.userAgent.toLowerCase().indexOf('android') > -1
  const isIos = navigator.userAgent.toLowerCase().indexOf('iphone') > -1

  const geoCoords = `${latitude},${longitude}`

  if (isAndroid || isIos) {
    const label = !name ? '' : encodeURI(name)

    return `geo:0,0?q=${geoCoords}(${label})`
    // return `geo:${latitude},${longitude}`
  }

  if (isIos) {
    return `maps://?q=${geoCoords}_system`
    // return `comgooglemaps://?q=${latitude},${longitude}`
  }

  return `https://www.google.com/maps/search/?api=1&query=${geoCoords}`
}

const mosques: Mosque[] = [
  {
    id: '1',
    name: 'المسجد العربي الرسمي',
    address: 'المسجد العربي الرسمي',
    photos: [
      // mosque photos
    ],
    metadata: {
      id: '1',
      name: 'المسجد العربي الرسمي',
      description: 'المسجد العربي الرسمي',
      category: 'المسجد العربي الرسمي',
      tags: ['المسجد العربي الرسمي'],
      contact: 'المسجد العربي الرسمي',
      website: 'https://www.mosque.com',
      email: 'info@mosque.com',
      phone: '+966 12345678',
    },
    coordinates: {
      latitude: 33.6079988,
      longitude: -7.6323539,
    },
    events: [
      {
        id: '1',
        name: 'المسجد العربي الرسمي',
        description: 'المسجد العربي الرسمي',
        date: '2023-01-01',
        time: '12:00',
      },
      {
        id: '2',
        name: 'المسجد العربي الرسمي',
        description: 'المسجد العربي الرسمي',
        date: '2023-01-02',
        time: '12:00',
      },
    ],
  },
  {
    id: '2',
    name: 'المسجد العربي الرسمي',
    address: 'المسجد العربي الرسمي',
    photos: [
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    ],
    metadata: {
      id: '2',
      name: 'المسجد العربي الرسمي',
      description: 'المسجد العربي الرسمي',
      category: 'المسجد العربي الرسمي',
      tags: ['المسجد العربي الرسمي'],
      contact: 'المسجد العربي الرسمي',
      website: 'https://www.mosque.com',
      email: 'info@mosque.com',
      phone: '+966 12345678',
    },
    coordinates: {
      latitude: 12.345678,
      longitude: 12.345678,
    },
    events: [
      {
        id: '1',
        name: 'المسجد العربي الرسمي',
        description: 'المسجد العربي الرسمي',
        date: '2023-01-01',
        time: '12:00',
      },
      {
        id: '2',
        name: 'المسجد العربي الرسمي',
        description: 'المسجد العربي الرسمي',
        date: '2023-01-02',
        time: '12:00',
      },
    ],
  },
  {
    id: '3',
    name: 'المسجد العربي الرسمي',
    address: 'المسجد العربي الرسمي',
    photos: [
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    ],
    metadata: {
      id: '3',
      name: 'المسجد العربي الرسمي',
      description: 'المسجد العربي الرسمي',
      category: 'المسجد العربي الرسمي',
      tags: ['المسجد العربي الرسمي'],
      contact: 'المسجد العربي الرسمي',
      website: 'https://www.mosque.com',
      email: 'info@mosque.com',
      phone: '+966 12345678',
    },
    coordinates: {
      latitude: 12.345678,
      longitude: 12.345678,
    },
    events: [
      {
        id: '1',
        name: 'المسجد العربي الرسمي',
        description: 'المسجد العربي الرسمي',
        date: '2023-01-01',
        time: '12:00',
      },
      {
        id: '2',
        name: 'المسجد العربي الرسمي',
        description: 'المسجد العربي الرسمي',
        date: '2023-01-02',
        time: '12:00',
      },
    ],
  },
]
