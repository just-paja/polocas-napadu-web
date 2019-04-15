import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import { Children, Classes } from 'core/proptypes';
import { MatchContext } from 'core/context';
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

const MainControls = ({ center, children, classes, closed }) => (
  <MatchContext.Consumer>
    {context => (
      <div className={classnames(classes.form, { [classes.center]: center })}>
        {context.match.closed ? null : <MatchSpeedDial label="Přidat" />}
        {children}
      </div>
    )}
  </MatchContext.Consumer>
);

MainControls.propTypes = {
  center: PropTypes.bool,
  classes: Classes.isRequired,
  children: Children,
  closed: PropTypes.bool,
};

MainControls.defaultProps = {
  center: false,
  closed: false,
};

export default withStyles(styles)(MainControls);
