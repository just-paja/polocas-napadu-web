import BoardLayout from './BoardLayout'
import React from 'react'
import ShowStageControls from './ShowStageControls'

const ControlsLayout = ({ children }) => (
  <BoardLayout layout='vertical'>
    {children}
    <ShowStageControls />
  </BoardLayout>
)

export default ControlsLayout
