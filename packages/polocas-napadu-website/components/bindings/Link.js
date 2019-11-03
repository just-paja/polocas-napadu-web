import React from 'react'

import { Link as RouterLink } from '../../routes'
import { withTranslation } from '../../lib/i18n'

function TranslatedLink ({
  href,
  children,
  i18n,
  language,
  route,
  t,
  tReady,
  ...other
}) {
  const linkLanguage = language || i18n.language || 'cs'
  return (
    <RouterLink href={route ? null : href} route={route ? `${linkLanguage}-${route}` : null} {...other}>
      {children}
    </RouterLink>
  )
}

export const Link = withTranslation(['common'])(TranslatedLink)

export function OptionalLink ({
  fallbackComponent: Component = React.Fragment,
  children,
  language,
  href,
  isLink,
  params,
  route,
  ...props
}) {
  return isLink
    ? <Link href={href} language={language} route={route} params={params} passHref><a {...props}>{children}</a></Link>
    : <Component>{children}</Component>
}
