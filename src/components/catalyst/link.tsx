import { Link as TnLink } from '@tanstack/react-router'

import * as Headless from '@headlessui/react'
import React, { forwardRef } from 'react'

export const Link = forwardRef(function Link(
  props: { href: string } & React.ComponentPropsWithoutRef<'a'>,
  ref: React.ForwardedRef<HTMLAnchorElement>
) {
  return (
    <Headless.DataInteractive>
      <TnLink {...props} ref={ref} to={props.href} />
    </Headless.DataInteractive>
  )
})
