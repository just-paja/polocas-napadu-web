import ListGroup from 'react-bootstrap/ListGroup'
import React from 'react'

import { Button } from 'polocas-napadu-ui/Button.mjs'
import { DeleteIcon } from 'polocas-napadu-ui/icons.mjs'
import { gql, useMutation } from '@apollo/client'

const INSPIRATION_DISCARD = gql`
  mutation InspirationDiscard($inspirationId: Int!) {
    discardInspiration(inspirationId: $inspirationId) {
      ok
    }
  }
`

const InspirationDiscard = ({ inspiration }) => {
  const [mutate, { loading }] = useMutation(INSPIRATION_DISCARD)
  const handleClick = () =>
    mutate({
      refetchQueries: ['MatchStage'],
      variables: {
        inspirationId: inspiration.id,
      },
    })

  return (
    <Button loading={loading} icon={<DeleteIcon />} onClick={handleClick} />
  )
}

const InspirationItem = ({ inspiration, readOnly }) => {
  return (
    <ListGroup.Item
      key={inspiration.id}
      className="d-flex justify-content-between align-items-center"
    >
      <span>{inspiration.text}</span>
      {readOnly ? null : <InspirationDiscard inspiration={inspiration} />}
    </ListGroup.Item>
  )
}

export const InspirationList = ({ inspirations, readOnly = false }) => (
  <ListGroup>
    {inspirations.map(inspiration => (
      <InspirationItem
        inspiration={inspiration}
        readOnly={readOnly}
        key={inspiration.id}
      />
    ))}
  </ListGroup>
)
