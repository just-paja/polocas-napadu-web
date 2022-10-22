import PropTypes from 'prop-types'
import React, { useState } from 'react'
import styles from './InspirationForm.module.scss'

import { Button } from 'polocas-napadu-ui/Button.mjs'
import { PlainInput } from 'polocas-napadu-ui/Input.mjs'

export const InspirationForm = ({ onSubmit, error, saving }) => {
  const [inspiration, setInspiration] = useState('')
  return (
    <div>
      <h2>Vložit inspiraci</h2>
      <p>
        Prosíme vás o krátké, třeba dvouslovné téma, které využijeme jako
        inspiraci do scének. Tedy potom, co si z nich rozhodčí vybere :-)
      </p>
      <form onSubmit={() => onSubmit({ inspiration })}>
        <div>
          <PlainInput
            disabled={saving}
            id="inspirationField"
            label="Inspirace"
            onChange={e => setInspiration(e.target.value)}
            value={inspiration}
            helpText='Inspirace může být cokoliv, třeba "Poslední tramvaj", "Pán s taškou" nebo "Stroj na lásku"'
          />
        </div>
        <div className={styles.controls}>
          <Button
            loading={saving}
            disabled={!inspiration}
            type="submit"
            variant="primary"
          >
            Vložit
          </Button>
          {!saving && error ? (
            <p className={styles.error}>
              {error.graphQLErrors &&
              error.graphQLErrors.some(err => err.message === 'already-exists')
                ? 'Toto téma již v košíčku existuje'
                : 'Něco se pokazilo. Zkuste to prosím znovu.'}
            </p>
          ) : null}
        </div>
      </form>
    </div>
  )
}

InspirationForm.propTypes = {
  error: PropTypes.shape({ message: PropTypes.string }),
  saving: PropTypes.bool,
}

InspirationForm.defaultProps = {
  error: null,
  saving: false,
}
