import { Outlet, createRootRoute } from '@tanstack/react-router'
import * as React from 'react'
import { HeaderNav } from '../components/header-nav'

export const Route = createRootRoute({
  component: RootComponent,
})

const TanStackRouterDevtools = !import.meta.env.DEV
  ? () => null // Render nothing in production
  : React.lazy(() =>
      // Lazy load in development
      import('@tanstack/router-devtools').then((res) => ({
        default: res.TanStackRouterDevtools,
      })),
    )

function RootComponent() {
  return (
    <React.Fragment>
      <HeaderNav />

      <Outlet />
      <TanStackRouterDevtools />
    </React.Fragment>
  )
}
