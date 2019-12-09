import classnames from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

import { Children, Classes } from 'core/proptypes'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
  box: {
    display: 'flex'
  },
  right: {
    marginLeft: 'auto'
  }
})

const StageProgress = ({ children, classes, side }) => (
  <div className={classnames(classes.box, classes[side])}>
    {children}
  </div>
)

StageProgress.propTypes = {
  children: Children,
  classes: Classes.isRequired,
  side: PropTypes.oneOf(['left', 'right'])
}

StageProgress.defaultProps = {
  side: 'left'
}

export default withStyles(styles)(StageProgress)
