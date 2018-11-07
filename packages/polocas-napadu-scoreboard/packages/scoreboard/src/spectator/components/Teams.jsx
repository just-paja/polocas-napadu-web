import PropTypes from 'prop-types';
import React from 'react';

import { withStyles } from '@material-ui/core/styles';

import TeamDetails from '../containers/TeamDetails';

import { SplitView } from '../../board/components';
import { Classes } from '../../proptypes';

const styles = {
  split: {
    width: '100%',
  },
};

const Teams = ({ classes, hideScore }) => (
  <SplitView className={classes.split}>
    <TeamDetails hideScore={hideScore} side="left" />
    <TeamDetails hideScore={hideScore} side="right" />
  </SplitView>
);

Teams.propTypes = {
  classes: Classes.isRequired,
  hideScore: PropTypes.bool,
};

Teams.defaultProps = {
  hideScore: false,
};

export default withStyles(styles)(Teams);
