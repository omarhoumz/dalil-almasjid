export type Mosque = {
  id: string
  name: string
  address?: string
  photos?: string[]
  metadata?: Partial<Metadata>
  coordinates: Coordinates
  events?: Event[]
}

export type Coordinates = {
  latitude: number
  longitude: number
}

export type Metadata = {
  id: string
  name: string
  description: string
  category: string
  tags: string[]
  contact: string
  website: string
  email: string
  phone: string
}

export type Event = {
  id: string
  name: string
  description: string
  date: string
  time: string
}
