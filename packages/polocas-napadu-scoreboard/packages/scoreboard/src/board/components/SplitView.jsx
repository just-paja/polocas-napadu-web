import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import { withStyles } from '@material-ui/core/styles';

import { Classes, ClassName } from '../../proptypes';

const styles = {
  teams: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '0 2.5%',
  },
  team: {
    textAlign: 'center',
    width: '47.5%',
  },
  middle: {
    width: '10%',
  },
  withMiddle: {
    width: '37.5%',
  },
};

const SplitView = ({ children, className, classes }) => (
  <div className={classnames(classes.teams, className)}>
    <div className={classnames(classes.team, { withMiddle: Boolean(children[2]) })}>
      {children[0]}
    </div>
    {children[2] ? (
      <div className={classes.middle}>
        {children[2]}
      </div>
    ) : null}
    <div className={classnames(classes.team, { withMiddle: Boolean(children[2]) })}>
      {children[1]}
    </div>
  </div>
);

SplitView.propTypes = {
  classes: Classes.isRequired,
  className: ClassName.isRequired,
  children: PropTypes.arrayOf(PropTypes.node).isRequired,
};

export default withStyles(styles)(SplitView);
