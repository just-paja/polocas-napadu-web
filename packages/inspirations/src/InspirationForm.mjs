import PropTypes from 'prop-types'
import React, { useState } from 'react'
import styles from './InspirationForm.module.scss'

import { Button } from 'polocas-napadu-ui/Button.mjs'
import { Heading, Section } from 'polocas-napadu-ui/content.mjs'
import { PlainInput } from 'polocas-napadu-ui/Input.mjs'
import { SendIcon } from 'polocas-napadu-ui/icons.mjs'

export const InspirationForm = ({ onSubmit, error, saving }) => {
  const [inspiration, setInspiration] = useState('')
  return (
    <Section>
      <Heading>Vložit inspiraci</Heading>
      <p>
        Prosíme vás o krátké, třeba dvouslovné téma, které využijeme jako
        inspiraci do scének. Tedy potom, co si z nich rozhodčí vybere :-)
      </p>
      <form onSubmit={() => onSubmit({ inspiration })}>
        <div className="mt-3">
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
            icon={<SendIcon />}
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
    </Section>
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
