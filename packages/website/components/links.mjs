import NextLink from 'next/link'
import React, { cloneElement, useCallback } from 'react'

import { reverse } from '../routes.mjs'
import { qsm } from 'query-string-manipulator'
import { useRouter } from 'next/router'
import { withTranslation } from '@polocas-napadu/ui/i18n.mjs'

export const openExternalUrl = (e, url) => {
  const target = url || e.target.href
  if (target && !target.match(/^mailto:/)) {
    e.preventDefault()
    window.open(target)
  }
}

export const Linker = withTranslation(
  ({ activeProp, children, href, i18n, query, params, route }) => {
    const router = useRouter()
    const target = route
      ? qsm(reverse(i18n.resolvedLanguage, route, params), { set: query })
      : href

    let extraProps = null
    if (activeProp) {
      extraProps = {}
      const routerPath = `/${i18n.resolvedLanguage}${router.asPath}`
      extraProps[activeProp] = routerPath.startsWith(`${target}/`)
    }

    return (
      <NextLink href={target} passHref>
        {cloneElement(children, { ...extraProps })}
      </NextLink>
    )
  }
)

export const Link = ({
  activeProp,
  as: As = 'a',
  children,
  external,
  href,
  params,
  query,
  route,
  ...props
}) => {
  const comp = (
    <As {...props} onClick={external && openExternalUrl}>
      {children}
    </As>
  )
  return props.disabled ? (
    comp
  ) : (
    <Linker
      activeProp={activeProp}
      href={href}
      params={params}
      query={query}
      route={route}
    >
      {comp}
    </Linker>
  )
}

export function OptionalLink({
  fallbackComponent: Component = React.Fragment,
  children,
  isLink,
  ...props
}) {
  return isLink ? (
    <Link {...props}>{children}</Link>
  ) : (
    <Component>{children}</Component>
  )
}

export function ExternalLink({ children, href, icon: Icon }) {
  if (!href) {
    return null
  }
  const open = useCallback(e => openExternalUrl(e, href), [href])
  return (
    <a href={href} rel="external" onClick={open}>
      {Icon && (
        <>
          <Icon />{' '}
        </>
      )}
      {children}
    </a>
  )
}
