import PropTypes from 'prop-types'
import React from 'react'

export const ArrayList = ({ text }) =>
  text &&
  text instanceof Array && (
    <ul>
      {text.map(t => (
        <li key={t}>{t}</li>
      ))}
    </ul>
  )

ArrayList.propTypes = {
  text: PropTypes.arrayOf(PropTypes.node),
}
