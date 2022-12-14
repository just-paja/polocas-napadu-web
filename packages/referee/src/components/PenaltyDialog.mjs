import React, { useEffect } from 'react'
import Modal from 'react-bootstrap/Modal'

import { Form, FormControls, RadioGroup } from '@polocas-napadu/ui/Form.mjs'
import { FoulSelection } from './FoulSelection.mjs'
import { gql, useMutation } from '@apollo/client'
import { useFormContext } from 'react-hook-form'
import { useMatch } from '@polocas-napadu/core/context.mjs'
import { useTranslation } from 'react-i18next'

const ADD_PENALTY_POINT = gql`
  mutation AddTeamPenalty(
    $contestantGroupId: Int!
    $foulTypeId: Int!
    $playerId: Int
  ) {
    addFoulPoint(
      contestantGroupId: $contestantGroupId
      foulTypeId: $foulTypeId
      playerId: $playerId
    ) {
      ok
    }
  }
`

const defaultValues = {
  contestantGroupId: '',
  playerId: '',
  foulType: '',
}

const FoulTeamSelection = ({ groups, name, ...props }) => {
  const { setValue, watch } = useFormContext()
  const playerId = watch('playerId')

  useEffect(() => {
    const selectedGroup = groups.find(g =>
      g.players.some(p => p.id === playerId)
    )
    if (selectedGroup) {
      setValue(name, selectedGroup.id)
    }
  }, [playerId])

  return (
    <RadioGroup
      {...props}
      name={name}
      options={groups.map(group => ({
        label: (
          <>
            {group.band.logo}
            {group.band.name}
          </>
        ),
        value: group.id,
      }))}
    />
  )
}

const FoulActorSelection = ({ players, ...props }) => (
  <RadioGroup
    {...props}
    options={players.map(player => ({
      label: player.profile.name,
      value: player.id,
    }))}
  />
)

const FoulForm = ({ values, onSubmit }) => {
  const { contestantGroups } = useMatch()
  const { t } = useTranslation()
  const collator = new Intl.Collator('cs')
  return (
    <Form onSubmit={onSubmit} defaultValues={values}>
      <FoulSelection name="foulTypeId" label={t('foul-type')} required />
      <FoulTeamSelection
        name="contestantGroupId"
        groups={contestantGroups}
        label={t('foul-team')}
        required
      />
      <FoulActorSelection
        players={contestantGroups
          .map(group => group.players)
          .flat()
          .sort((a, b) => collator.compare(a.profile.name, b.profile.name))}
        label={t('foul-person')}
        name="playerId"
      />
      <FormControls submitLabel={t('record-penalty-point')} />
    </Form>
  )
}

export const PenaltyDialog = ({ open, onClose, values = defaultValues }) => {
  const [saveFoul] = useMutation(ADD_PENALTY_POINT, {
    refetchQueries: ['MatchStage'],
    onCompleted: onClose,
  })
  const handleSubmit = variables => saveFoul({ variables })
  return (
    <Modal onHide={onClose} show={open}>
      <Modal.Header closeButton>
        <Modal.Title>Udělit trestný bod</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <FoulForm onSubmit={handleSubmit} values={values} />
      </Modal.Body>
    </Modal>
  )
}
