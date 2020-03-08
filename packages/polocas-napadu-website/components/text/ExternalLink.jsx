import React from 'react'

export function ExternalLink ({ children, href, icon: Icon }) {
  if (!href) {
    return null
  }
  const open = (e) => {
    e.preventDefault()
    window.open(href)
  }
  return (
    <a href={href} rel='external' onClick={open}>
      {Icon && <><Icon />{' '}</>}
      {children}
    </a>
  )
}
