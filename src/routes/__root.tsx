import { Link, Outlet, createRootRoute } from '@tanstack/react-router'
import * as React from 'react'

export const Route = createRootRoute({
  component: RootComponent,
})

const TanStackRouterDevtools = !import.meta.env.DEV
  ? () => null // Render nothing in production
  : React.lazy(() =>
      // Lazy load in development
      import('@tanstack/router-devtools').then((res) => ({
        default: res.TanStackRouterDevtools,
        // For Embedded Mode
        // default: res.TanStackRouterDevtoolsPanel
      }))
    )

function RootComponent() {
  return (
    <React.Fragment>
      <div className='p-2 flex gap-2'>
        <Link to='/' className='[&.active]:font-bold'>
          Dalil Almasjid
        </Link>
        <Link to='/about' className='[&.active]:font-bold'>
          About
        </Link>
      </div>
      <hr />
      <Outlet />
      <TanStackRouterDevtools />
    </React.Fragment>
  )
}
