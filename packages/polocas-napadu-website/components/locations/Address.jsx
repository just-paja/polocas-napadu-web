import PropTypes from 'prop-types'
import React from 'react'

function addressToHtml (address) {
  return address.split(',')
    .map(row => row.trim())
    .reduce((aggr, addressRow, index, array) => {
      const row = <React.Fragment key={index}>{addressRow}</React.Fragment>
      return (
        index < array.length
          ? [...aggr, row, <br key={addressRow} />]
          : [...aggr, row]
      )
    }, [])
}

export const Address = ({ address }) => (
  <address>{addressToHtml(address)}</address>
)

Address.propTypes = {
  address: PropTypes.string.isRequired
}
