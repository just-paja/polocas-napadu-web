import classnames from 'classnames'
import React, { useRef, useState } from 'react'
import styles from './SpeedDial.module.scss'

import { useRootClose } from 'react-overlays'
import { TitledButton } from './Button.mjs'
import { MoreIcon } from './icons.mjs'

const SpeedDialContext = React.createContext({})

export const useSpeedDial = () => React.useContext(SpeedDialContext)

export const SpeedDialItem = ({ className, ...props }) => {
  const { open } = useSpeedDial()
  return (
    <TitledButton
      variant="secondary"
      {...props}
      className={classnames(styles.menuButton, className)}
      iconOnly
      showTitle={open}
    />
  )
}

export const SpeedDial = ({
  children,
  className,
  title,
  icon = <MoreIcon />,
}) => {
  const ref = useRef(null)
  const [open, setOpen] = useState(false)
  const handleClose = () => setOpen(false)
  const toggle = () => setOpen(!open)
  useRootClose(ref, handleClose, { disabled: !open })

  return (
    <div className={classnames(styles.anchor, className)}>
      <div
        className={classnames('flex-column', styles.menu, {
          [styles.open]: open,
        })}
        ref={ref}
      >
        <SpeedDialContext.Provider value={{ open }}>
          {children}
        </SpeedDialContext.Provider>
      </div>
      <TitledButton
        variant="secondary"
        icon={icon}
        iconOnly
        showTitle={open}
        title={title}
        onClick={toggle}
      />
    </div>
  )
}

SpeedDial.Item = SpeedDialItem
