import { Link } from './catalyst/link'

export function HeaderNav() {
  return (
    <nav className='flex gap-2 p-2 items-center'>
      <Link href='/' className='[&.active]:font-bold'>
        Dalil Almasjid
      </Link>
      <Link href='/about' className='[&.active]:font-bold'>
        About
      </Link>
    </nav>
  )
}
