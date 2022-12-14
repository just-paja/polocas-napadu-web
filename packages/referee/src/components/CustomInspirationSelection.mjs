import React, { useState } from 'react'

import { CustomInspirationDialog } from './CustomInspirationDialog.mjs'
import { Button } from '@polocas-napadu/ui/Button.mjs'

export const CustomInspirationSelection = () => {
  const [open, setOpen] = useState(false)
  const handleClose = () => setOpen(false)
  const handleOpen = () => setOpen(true)
  return (
    <>
      <Button onClick={handleOpen}>Zadat ručně</Button>
      <CustomInspirationDialog open={open} onClose={handleClose} />
    </>
  )
}
