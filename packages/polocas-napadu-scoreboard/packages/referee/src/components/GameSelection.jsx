import React from 'react';
import Select from 'react-select';

import { gql } from 'apollo-boost';
import { Classes } from 'core/proptypes';
import { withStyles } from '@material-ui/core/styles';

import GraphContainer from './GraphContainer';

const styles = {
};

const GET_GAMES = gql`
  query GameRules {
    gameRulesList {
      id,
      name,
    }
  }
`;

const GameSelection = ({ classes, data, onChange, theme, value }) => (
  <Select
    classes={classes}
    options={data.gameRulesList}
    getOptionLabel={option => option.name}
    getOptionValue={option => option.id}
    value={value}
    onChange={onChange}
    placeholder="Vyber kategorii"
    isClearable
  />
);

GameSelection.propTypes = {
  classes: Classes.isRequired,
};

export default GraphContainer(
  withStyles(styles, { withTheme: true })(GameSelection),
  GET_GAMES
);
