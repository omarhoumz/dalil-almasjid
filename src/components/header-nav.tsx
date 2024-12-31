import { MoonIcon } from '@heroicons/react/16/solid'
import { Link } from './catalyst/link'
import { cn } from '../utils/cn'

export function HeaderNav() {
  return (
    <nav className='flex items-center gap-2 px-4 py-3'>
      <Link href='/' className='[&.active]:font-bold'>
        Dalil Almasjid
      </Link>
      <Link href='/about' className='[&.active]:font-bold'>
        About
      </Link>

      <ThemeSwitcher className='ms-auto' />
    </nav>
  )
}

function ThemeSwitcher({ className }: { className?: string }) {
  function handleThemeSwitch() {
    const html = document.querySelector('html')!
    const isDark = html.classList.contains('dark')

    html.style.colorScheme = isDark ? 'light' : 'dark'
    html.classList.toggle('dark')
    html.classList.toggle('light')

    localStorage.setItem('theme', isDark ? 'light' : 'dark')
  }

  return (
    <button
      className={cn(
        'rounded p-2 text-zinc-300 hover:bg-zinc-50 hover:text-zinc-800 dark:text-zinc-500 dark:hover:bg-zinc-800 dark:hover:text-zinc-200',
        className,
      )}
      type='button'
      onClick={handleThemeSwitch}
    >
      <MoonIcon className='size-4' />
    </button>
  )
}
