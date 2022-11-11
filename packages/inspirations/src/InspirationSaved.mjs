import PropTypes from 'prop-types'
import React from 'react'

import { Button } from 'polocas-napadu-ui/Button.mjs'
import { AgainIcon } from 'polocas-napadu-ui/icons.mjs'

export const InspirationSaved = ({ onContinue }) => (
  <div>
    <h2>Díky!</h2>
    <p>
      Inspiraci jsme si uložili a teď už je jenom na rozhodčím a na náhodě
      jestli se dostane do hry.
    </p>
    <div className="mt-3">
      <Button icon={<AgainIcon />} onClick={onContinue}>
        Vložit další
      </Button>
    </div>
  </div>
)

InspirationSaved.propTypes = {
  onContinue: PropTypes.func.isRequired,
}
