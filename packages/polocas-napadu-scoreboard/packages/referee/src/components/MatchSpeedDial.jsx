import React from 'react';
import ErrorOutline from '@material-ui/icons/ErrorOutline';
import SurroundSound from '@material-ui/icons/SurroundSound';
import SpeedDialAction from '@material-ui/lab/SpeedDialAction';

import CalibrationDialog from './CalibrationDialog';
import PenaltyDialog from './PenaltyDialog';
import SpeedDialControl from './SpeedDialControl';

class MatchSpeedDial extends React.Component {
  constructor() {
    super();
    this.handlePenaltyDialogClose = this.handlePenaltyDialogClose.bind(this);
    this.handlePenaltyDialogOpen = this.handlePenaltyDialogOpen.bind(this);
    this.handleCalibrationDialogClose = this.handleCalibrationDialogClose.bind(this);
    this.handleCalibrationDialogOpen = this.handleCalibrationDialogOpen.bind(this);
    this.state = {
      showPenaltyDialog: false,
      showCalibrationDialog: false,
    };
  }

  handlePenaltyDialogClose() {
    this.setState({ showPenaltyDialog: false });
  }

  handlePenaltyDialogOpen() {
    this.setState({ showPenaltyDialog: true });
  }

  handleCalibrationDialogClose() {
    this.setState({ showCalibrationDialog: false });
  }

  handleCalibrationDialogOpen() {
    this.setState({ showCalibrationDialog: true });
  }

  render() {
    return (
      <React.Fragment>
        <SpeedDialControl label="Přidat">
          <SpeedDialAction
            icon={<ErrorOutline />}
            onClick={this.handlePenaltyDialogOpen}
            tooltipTitle="Trestný bod"
            tooltipOpen
          />
          <SpeedDialAction
            icon={<SurroundSound />}
            onClick={this.handleCalibrationDialogOpen}
            tooltipTitle="Kalibrovat hlasování"
            tooltipOpen
          />
        </SpeedDialControl>
        <CalibrationDialog
          open={this.state.showCalibrationDialog}
          onClose={this.handleCalibrationDialogClose}
        />
        <PenaltyDialog
          open={this.state.showPenaltyDialog}
          onClose={this.handlePenaltyDialogClose}
        />
      </React.Fragment>
    );
  }
}

export default MatchSpeedDial;
