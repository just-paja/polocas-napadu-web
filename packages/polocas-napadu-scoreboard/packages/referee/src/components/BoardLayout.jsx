import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  layout: {
    display: 'flex',
    width: '100%',
  },
  horizontal: {
    flexDirection: 'row',
    '& > *': {
      width: '50%',
    },
  },
  vertical: {
    alignItems: 'stretch',
    flexDirection: 'column',
    height: '100%',
  },
});

const BoardLayout = ({ children, classes, layout }) => (
  <div className={classnames(classes.layout, classes[layout])}>
    {children}
  </div>
);

BoardLayout.propTypes = {
  layout: PropTypes.oneOf(['horizontal', 'vertical']),
};

BoardLayout.defaultProps = {
  layout: 'horizontal',
};

export default withStyles(styles)(BoardLayout);
