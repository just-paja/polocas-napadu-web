import Accordion from 'react-bootstrap/Accordion'
import classnames from 'classnames'
import Container from 'react-bootstrap/Container'
import getConfig from 'next/config'
import Offcanvas from 'react-bootstrap/Offcanvas'
import React, { useCallback, useEffect, useState } from 'react'
import Script from 'next/script'
import styles from './tracking.module.scss'

import { getCookie, setCookies } from 'cookies-next'
import { Button } from 'polocas-napadu-ui/Button.mjs'
import { Form, FormControls, Input } from 'polocas-napadu-ui/Form.mjs'
import { useTranslation } from 'next-i18next'

const COOKIE_CONSENT = 'cookieConsent'
const CONSENT_FUNCTIONAL = 'functional'
const CONSENT_TRACKING = 'tracking'
const CONSENT_MARKETING = 'marketing'

const defaultConsent = {
  [CONSENT_FUNCTIONAL]: true,
  [CONSENT_TRACKING]: true,
  [CONSENT_MARKETING]: true,
}

const ConsentForm = ({ consent, onCancel, onSubmit }) => {
  const { t } = useTranslation()
  const defaultValues = consent || defaultConsent
  const stopPropagation = e => e.stopPropagation()
  return (
    <Form
      defaultValues={defaultValues}
      id="cookieConsent"
      onSubmit={values =>
        onSubmit({
          ...values,
          [CONSENT_FUNCTIONAL]: true,
        })
      }
    >
      <Accordion>
        <Accordion.Item eventKey={CONSENT_FUNCTIONAL}>
          <Accordion.Header>
            <Input
              type="checkbox"
              disabled
              checked
              name={CONSENT_FUNCTIONAL}
              label={t('cookie-functional')}
              onClick={stopPropagation}
            />
          </Accordion.Header>
          <Accordion.Body>
            <p>{t('cookie-functional-help-text')}</p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey={CONSENT_TRACKING}>
          <Accordion.Header>
            <Input
              type="checkbox"
              name={CONSENT_TRACKING}
              label={t('cookie-tracking')}
              onClick={stopPropagation}
            />
          </Accordion.Header>
          <Accordion.Body>
            <p>{t('cookie-tracking-help-text')}</p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey={CONSENT_MARKETING}>
          <Accordion.Header>
            <Input
              type="checkbox"
              name={CONSENT_MARKETING}
              label={t('cookie-marketing')}
              onClick={stopPropagation}
            />
          </Accordion.Header>
          <Accordion.Body>
            <p>{t('cookie-marketing-help-text')}</p>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <FormControls
        submitLabel={t('cookie-confirm')}
        onCancel={onCancel}
        cancelLabel={t('cookie-go-back')}
      />
    </Form>
  )
}

const QuickConsentForm = ({ onAccept, onCustomize }) => {
  const { t } = useTranslation()
  return (
    <div className={styles.quickForm}>
      <Button variant="secondary" size="lg" onClick={onCustomize}>
        {t('cookie-customize')}
      </Button>
      <Button size="lg" onClick={onAccept}>
        {t('cookie-confirm-all')}
      </Button>
    </div>
  )
}

const ConsentDialog = ({ consent, onResolve, show }) => {
  const [showForm, setShowForm] = useState(false)
  const acceptAll = () => onResolve(defaultConsent)

  const { t } = useTranslation()
  return (
    <Offcanvas
      show={show}
      placement="bottom"
      className={classnames(styles.canvas, { [styles.canvasBig]: showForm })}
    >
      <Offcanvas.Body>
        <Container className={styles.container}>
          <Offcanvas.Title>{t('cookie-consent-title')}</Offcanvas.Title>
          <p>{t('cookie-consent-description')}</p>
          {showForm ? (
            <ConsentForm
              onAccept={acceptAll}
              onCancel={() => setShowForm(false)}
              onSubmit={onResolve}
              consent={consent}
            />
          ) : (
            <QuickConsentForm
              onAccept={acceptAll}
              onCustomize={() => setShowForm(true)}
            />
          )}
        </Container>
      </Offcanvas.Body>
    </Offcanvas>
  )
}

const GoogleTagManager = () => {
  const config = getConfig()
  const { publicRuntimeConfig } = config
  const { GTM_CODE } = publicRuntimeConfig
  return (
    <Script
      id="gtm"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_CODE}');`,
      }}
    />
  )
}

const getConsentValue = () => {
  const cookie = getCookie(COOKIE_CONSENT)
  if (!cookie) {
    return null
  }
  return cookie
    .split(',')
    .reduce((aggr, key) => Object.assign(aggr, { [key]: true }), {})
}

const publishConsent = consent => {
  if (consent) {
    window.dataLayer.push({
      event: 'cookieConsentSubmit',
      marketingConsent: Boolean(consent[CONSENT_MARKETING]),
      trackingConsent: Boolean(consent[CONSENT_TRACKING]),
    })
  }
}

const FIVE_YEARS = 157680000

export const Tracking = () => {
  const [consent, setConsent] = useState(getConsentValue())
  const [showDialog, setShowDialog] = useState(false)
  const showConsentDialog = useCallback(
    () => setShowDialog(true),
    [setShowDialog]
  )
  useEffect(() => {
    window.showConsentDialog = showConsentDialog
  }, [showConsentDialog])
  useEffect(() => {
    publishConsent(consent)
  }, [consent])
  const saveConsent = values => {
    setConsent(values)
    const cookieValue = Object.entries(values)
      .reduce((aggr, [key, value]) => (value ? [...aggr, key] : aggr), [])
      .join(',')
    setCookies(COOKIE_CONSENT, cookieValue, {
      maxAge: FIVE_YEARS,
      sameSite: 'strict',
    })
    setShowDialog(false)
  }
  return (
    <>
      {showDialog && (
        <ConsentDialog
          consent={consent}
          show={showDialog}
          onResolve={saveConsent}
        />
      )}
      <GoogleTagManager />
    </>
  )
}
