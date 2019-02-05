import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import { Children, Classes } from 'core/proptypes';
import { withStyles } from '@material-ui/core/styles';

import MatchSpeedDial from './MatchSpeedDial';

const styles = theme => ({
  center: {
    textAlign: 'center',
  },
  form: {
    padding: theme.spacing.unit * 4,
    margin: '0 auto',
    minWidth: '20rem',
  },
});

const MainControls = ({ center, children, classes }) => (
  <div className={classnames(classes.form, { [classes.center]: center })}>
    <MatchSpeedDial label="Přidat" />
    {children}
  </div>
);

MainControls.propTypes = {
  center: PropTypes.bool,
  classes: Classes.isRequired,
  children: Children,
};

MainControls.defaultProps = {
  center: false,
};

export default withStyles(styles)(MainControls);
