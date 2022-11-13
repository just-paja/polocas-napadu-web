import React from 'react'

import { BoardLayout } from './BoardLayout.mjs'
import { ControlsLayout } from './ControlsLayout.mjs'
import { Heading } from 'polocas-napadu-ui/content.mjs'
import { MainControls } from './MainControls.mjs'
import { Team } from './Team.mjs'
import { useTranslation } from 'react-i18next'
import {
  TEAM_SIDE_LEFT,
  TEAM_SIDE_RIGHT,
} from 'polocas-napadu-core/constants.mjs'

export const FinaleStage = () => {
  const { t } = useTranslation()
  return (
    <ControlsLayout>
      <BoardLayout>
        <Team side={TEAM_SIDE_LEFT} />
        <Team side={TEAM_SIDE_RIGHT} />
      </BoardLayout>
      <MainControls center>
        <Heading>{t('matchWasClosed')}</Heading>
      </MainControls>
    </ControlsLayout>
  )
}
