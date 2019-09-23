import React from 'react'

import { Link } from '../../routes'
export { Link } from '../../routes'

export function OptionalLink ({
  fallbackComponent: Component = React.Fragment,
  children,
  isLink,
  params,
  route,
  ...props
}) {
  return isLink
    ? <Link route={route} params={params} passHref><a {...props}>{children}</a></Link>
    : <Component>{children}</Component>
}
