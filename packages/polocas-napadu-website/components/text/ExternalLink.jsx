import React, { useCallback } from 'react'

export function ExternalLink ({ children, href, icon: Icon }) {
  if (!href) {
    return null
  }
  const open = useCallback(
    e => {
      e.preventDefault()
      window.open(href)
    },
    [href]
  )
  return (
    <a href={href} rel='external' onClick={open}>
      {Icon && (
        <>
          <Icon />{' '}
        </>
      )}
      {children}
    </a>
  )
}
