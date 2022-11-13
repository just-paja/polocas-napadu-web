import React, { useState } from 'react'

import { gql, useMutation } from '@apollo/client'
import { InspirationForm } from './InspirationForm.mjs'
import { InspirationSaved } from './InspirationSaved.mjs'

const ADD_INSPIRATION = gql`
  mutation AddInspiration($showId: Int!, $inspirationText: String!) {
    addInspiration(showId: $showId, inspirationText: $inspirationText) {
      ok
    }
  }
`

export const InsertInspiration = ({ show }) => {
  const [saved, setSaved] = useState(false)
  const [save, { loading, error }] = useMutation(ADD_INSPIRATION)

  if (saved) {
    return <InspirationSaved onContinue={() => setSaved(false)} />
  }

  const handleSubmit = async formValue => {
    await save({
      refetchQueries: ['ShowInfo'],
      variables: {
        inspirationText: formValue.inspiration,
        showId: show.id,
      },
    })
    setSaved(true)
  }

  return (
    <InspirationForm onSubmit={handleSubmit} error={error} saving={loading} />
  )
}
