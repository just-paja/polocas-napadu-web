import React from 'react';

import { Classes } from 'core/proptypes';
import { withStyles } from '@material-ui/core/styles';
import { TEAM_SIDE_LEFT, TEAM_SIDE_RIGHT } from 'core/constants';

import BoardLayout from './BoardLayout';
import ControlsLayout from './ControlsLayout';
import MainControls from './MainControls';
import Team from './Team';

const styles = {
  inspiration: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
  },
};

const ShowSetupStage = ({ classes }) => (
  <ControlsLayout>
    <BoardLayout>
      <Team side={TEAM_SIDE_LEFT} />
      <Team side={TEAM_SIDE_RIGHT} />
    </BoardLayout>
    <MainControls center>
      <h1>Příprava zápasu</h1>
      <p>
        Na hlavní obrazovce je vidět QR kód s odkazem na zadání témat. Čekáme na
        příchod sportovních komentátorů nebo konferenciéra.
      </p>
    </MainControls>
  </ControlsLayout>
);

ShowSetupStage.propTypes = {
  classes: Classes.isRequired,
};

export default withStyles(styles)(ShowSetupStage);
