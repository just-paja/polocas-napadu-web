import React, { useState } from 'react'

import { AddIcon, FoulIcon } from '@polocas-napadu/ui/icons.mjs'
import { PenaltyDialog } from './PenaltyDialog.mjs'
import { SpeedDial } from '@polocas-napadu/ui/SpeedDial.mjs'

export const MatchSpeedDial = ({ className }) => {
  const [showPenaltyDialog, setShowPenaltyDialog] = useState(false)
  const handlePenaltyDialogClose = () => setShowPenaltyDialog(false)
  const handlePenaltyDialogOpen = () => setShowPenaltyDialog(true)
  return (
    <>
      <SpeedDial icon={<AddIcon />} title="Přidat" className={className}>
        <SpeedDial.Item
          icon={<FoulIcon />}
          onClick={handlePenaltyDialogOpen}
          title="Trestný bod"
        />
      </SpeedDial>
      <PenaltyDialog
        open={showPenaltyDialog}
        onClose={handlePenaltyDialogClose}
      />
    </>
  )
}
