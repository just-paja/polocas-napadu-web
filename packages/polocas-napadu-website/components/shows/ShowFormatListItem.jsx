import React from 'react'

import { Link } from '../bindings'
import { ShowType } from 'polocas-napadu-core/proptypes'

function ShowFormatListItemComponent ({ showFormat }) {
  return (
    <li>
      <Link route='showFormatDetail' params={{ slug: showFormat.slug }}>
        <a>{showFormat.name}</a>
      </Link>
    </li>
  )
}

ShowFormatListItemComponent.propTypes = {
  showFOrmat: ShowType.isRequired
}

export const ShowFormatListItem = ShowFormatListItemComponent
