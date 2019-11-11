import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import IconButton from '@material-ui/core/IconButton';
import PropTypes from 'prop-types';
import React from 'react';

import { MatchContext } from 'core/context';
import { Children, Classes } from 'core/proptypes';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  buttonProgress: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -12,
    marginLeft: -12,
  },
  wrapper: {
    display: 'inline-flex',
    position: 'relative',
  },
});

const InteractiveButton = ({
  classes,
  disabled,
  children,
  icon,
  loading,
  onClick,
  ...props,
}) => {
  const Component = icon ? IconButton : Button;
  return (
    <MatchContext.Consumer>
      {context => (
        <div className={classes.wrapper}>
          <Component
            disabled={loading || disabled}
            onClick={onClick}
            {...props}
          >{children}</Component>
          {loading && <CircularProgress
            size={24}
            className={classes.buttonProgress}
          />}
        </div>
      )}
    </MatchContext.Consumer>
  );
};

InteractiveButton.propTypes = {
  classes: Classes.isRequired,
  disabled: PropTypes.bool,
  children: Children,
  icon: PropTypes.bool,
  loading: PropTypes.bool,
  onClick: PropTypes.func,
};

InteractiveButton.defaultProps = {
  disabled: false,
  children: null,
  icon: false,
  loading: false,
  onClick: null,
};

export default withStyles(styles)(InteractiveButton);
