import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import React from 'react';

import { withStyles } from '@material-ui/core/styles';

import { Classes } from '../../proptypes';

const styles = {
  inspiration: {
    fontSize: '2rem',
    padding: '1rem',
  },
};

const InspirationGenerator = ({ classes, onDiscard, onGenerate, onSelect, inspiration }) => (
  <div>
    <div className={classes.inspiration}>
      {inspiration || (
        <span className={classes.empty}>
          Click generate to get a suggestion
        </span>
      )}
    </div>
    <Button color="secondary" variant="contained" onClick={onDiscard}>
      Discard this
    </Button>
    <Button variant="contained" onClick={onGenerate}>
      Generate new
    </Button>
    <Button color="primary" variant="contained" onClick={onSelect}>
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
