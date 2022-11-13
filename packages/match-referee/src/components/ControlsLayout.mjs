import React from 'react'

import { BoardLayout } from './BoardLayout.mjs'
import { ShowStageControls } from './ShowStageControls.mjs'

export const ControlsLayout = ({ children }) => (
  <BoardLayout layout="vertical">
    {children}
    <ShowStageControls />
  </BoardLayout>
)
