import React from 'react'

import { Link } from '../links.mjs'

export const FoulTypeListComponent = ({ foulTypes }) => {
  return (
    <ul>
      {foulTypes.map(foulType => (
        <li key={foulType.slug}>
          <Link route="foulTypeDetail" params={{ slug: foulType.slug }}>
            {foulType.name}
          </Link>
        </li>
      ))}
    </ul>
  )
}
