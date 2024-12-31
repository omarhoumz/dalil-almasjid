import { MoonIcon } from '@heroicons/react/16/solid'
import { useEffect } from 'react'

import { cn } from '../utils/cn'
import { Link } from './catalyst/link'

export function HeaderNav() {
  return (
    <nav className='flex items-center gap-2 border-b border-zinc-950/10 px-4 py-3 dark:border-white/10'>
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

function setTheme(theme: string) {
  const html = document.querySelector('html')!
  html.classList.toggle('dark', theme === 'dark')
  html.classList.toggle('light', theme === 'light')

  html.style.colorScheme = theme

  localStorage.setItem('theme', theme)
}

function ThemeSwitcher({ className }: { className?: string }) {
  function handleThemeSwitch() {
    const html = document.querySelector('html')!
    const isDark = html.classList.contains('dark')

    setTheme(isDark ? 'light' : 'dark')
  }

  useEffect(() => {
    const theme = localStorage.getItem('theme')

    const userPrefersDark = window.matchMedia(
      '(prefers-color-scheme: dark)',
    ).matches

    const newTheme = theme || (userPrefersDark ? 'dark' : 'light')

    setTheme(newTheme)
  }, [])

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
