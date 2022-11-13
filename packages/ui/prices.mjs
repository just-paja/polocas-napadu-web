import React from 'react'

import { withTranslation } from './i18n.mjs'

const getMaxPrice = prices =>
  prices.reduce((aggr, ticketPrice) =>
    ticketPrice.amount > aggr.amount ? ticketPrice : aggr
  )

const currencyDecimals = 2

export const Price = withTranslation(({ amount, currency, from, i18n, t }) => {
  const price = parseFloat(amount).toLocaleString(i18n.language, {
    currency,
    style: 'currency',
    maximumFractionDigits: currency === 'CZK' ? 0 : currencyDecimals,
  })
  return from ? t('price-from', { price }) : price
})

export const PriceSummary = ({ prices }) => {
  if (prices.length === 0) {
    return null
  }
  const max = getMaxPrice(prices)
  return (
    <Price
      amount={max.amount}
      currency={max.currency}
      from={prices.length === 1}
    />
  )
}
