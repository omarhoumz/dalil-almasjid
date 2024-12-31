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
        // For Embedded Mode
        // default: res.TanStackRouterDevtoolsPanel
      }))
    )

function RootComponent() {
  return (
    <React.Fragment>
      <HeaderNav />

      <hr />

      <Outlet />
      <TanStackRouterDevtools />
    </React.Fragment>
  )
}
