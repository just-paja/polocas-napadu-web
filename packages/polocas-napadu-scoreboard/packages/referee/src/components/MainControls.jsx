import React from 'react';

import { Children, Classes } from 'core/proptypes';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  form: {
    padding: theme.spacing.unit * 4,
    margin: '0 auto',
    minWidth: '20rem',
  },
});

const MainControls = ({ children, classes }) => (
  <div className={classes.form}>
    {children}
  </div>
);

MainControls.propTypes = {
  classes: Classes.isRequired,
  children: Children,
};

export default withStyles(styles)(MainControls);
