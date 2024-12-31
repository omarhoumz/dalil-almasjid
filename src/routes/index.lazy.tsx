import { createLazyFileRoute } from '@tanstack/react-router'

import { Input } from '../components/catalyst/input'

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
    </div>
  )
}
