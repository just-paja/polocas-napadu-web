import React from 'react'

export const AppError = ({ error }) => {
  if (!error) {
    return null
  }
  if (error instanceof Error) {
    return <span>{error.message}</span>
  }
  return <span>{error}</span>
}
