import PropTypes from 'prop-types'
import React from 'react'

export const ArrayList = ({ text }) => text && (
  <ul>
    {text.map(text => (
      <li key={text}>
        {text}
      </li>
    ))}
  </ul>
)

ArrayList.propTypes = {
  text: PropTypes.arrayOf(PropTypes.node)
}
