import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import React from 'react';

import { withStyles } from '@material-ui/core/styles';

import { Classes } from '../../proptypes';

const styles = {
  inspiration: {},
};

const InspirationGenerator = ({ classes, onGenerate, onSelect, inspiration }) => (
  <div>
    <div className={classes.inspiration}>
      {inspiration || (
        <span className={classes.empty}>
          Click generate to get a suggestion
        </span>
      )}
    </div>
    <Button onClick={onGenerate}>
      Generate new
    </Button>
    <Button onClick={onSelect}>
      Use this!
    </Button>
  </div>
);

InspirationGenerator.propTypes = {
  classes: Classes.isRequired,
  inspiration: PropTypes.string,
  onGenerate: PropTypes.func.isRequired,
  onSelect: PropTypes.func.isRequired,
};

export default withStyles(styles)(InspirationGenerator);
