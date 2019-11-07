import PropTypes from 'prop-types'
import React from 'react'

function nonEmpty (item) {
  return Boolean(item)
}

function addressToHtml (...args) {
  return args.join(',').split(',')
    .map(row => row.trim())
    .filter(nonEmpty)
    .reduce((aggr, addressRow, index, array) => {
      const row = <React.Fragment key={index}>{addressRow}</React.Fragment>
      return (
        index < array.length
          ? [...aggr, row, <br key={addressRow} />]
          : [...aggr, row]
      )
    }, [])
}

export const Address = ({ address, city }) => (
  <address>{addressToHtml(address, city)}</address>
)

Address.propTypes = {
  address: PropTypes.string.isRequired,
  city: PropTypes.string
}
