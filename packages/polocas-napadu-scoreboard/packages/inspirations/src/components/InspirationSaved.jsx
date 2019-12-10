import InteractiveButton from './InteractiveButton'
import PropTypes from 'prop-types'
import React from 'react'

const InspirationSaved = ({ onContinue }) => (
  <div>
    <h2>Díky!</h2>
    <p>
      Inspiraci jsme si uložili a teď už je jenom na rozhodčím a na náhodě
      jestli se dostane do hry.
    </p>
    <InteractiveButton onClick={onContinue} variant='outlined'>
      Vložit další
    </InteractiveButton>
  </div>
)

InspirationSaved.propTypes = {
  onContinue: PropTypes.func.isRequired
}

export default InspirationSaved
