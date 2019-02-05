import PropTypes from 'prop-types';
import React, { Component } from 'react';
import SpeedDial from '@material-ui/lab/SpeedDial';
import SpeedDialIcon from '@material-ui/lab/SpeedDialIcon';

import { withStyles } from '@material-ui/core/styles';

import { Classes } from 'core/proptypes';

const styles = theme => ({
  speedDial: {
    bottom: theme.spacing.unit * 13,
    left: theme.spacing.unit * 3,
    position: 'fixed',
  },
});

class SpeedDialControl extends Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleOpen = this.handleOpen.bind(this);
    this.state = {
      open: false,
    };
  }

  handleClick() {
    this.setState(state => ({ open: !state.open }));
  }

  handleOpen() {
    this.setState({ open: true });
  }

  handleClose() {
    this.setState({ open: false });
  }

  render() {
    const { children, classes, label } = this.props;
    const { open } = this.state;
    return (
      <SpeedDial
        ariaLabel={label}
        className={classes.speedDial}
        icon={<SpeedDialIcon />}
        onBlur={this.handleClose}
        onClick={this.handleClick}
        onClose={this.handleClose}
        onFocus={this.handleOpen}
        onMouseEnter={this.handleOpen}
        onMouseLeave={this.handleClose}
        open={open}
      >
        <div />
        {children}
      </SpeedDial>
    );
  }
}

SpeedDialControl.propTypes = {
  classes: Classes.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
  label: PropTypes.string.isRequired,
};

export default withStyles(styles)(SpeedDialControl);
