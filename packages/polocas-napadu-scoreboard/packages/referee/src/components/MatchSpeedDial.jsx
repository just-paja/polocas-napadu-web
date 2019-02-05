import React from 'react';
import ErrorOutline from '@material-ui/icons/ErrorOutline';
import SpeedDialAction from '@material-ui/lab/SpeedDialAction';

import PenaltyDialog from './PenaltyDialog';
import SpeedDialControl from './SpeedDialControl';

class MatchSpeedDial extends React.Component {
  constructor() {
    super();
    this.handlePenaltyDialogClose = this.handlePenaltyDialogClose.bind(this);
    this.handlePenaltyDialogOpen = this.handlePenaltyDialogOpen.bind(this);
    this.state = {
      showPenaltyDialog: false,
    };
  }

  handlePenaltyDialogClose() {
    this.setState({ showPenaltyDialog: false });
  }

  handlePenaltyDialogOpen() {
    this.setState({ showPenaltyDialog: true });
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
        </SpeedDialControl>
        <PenaltyDialog
          open={this.state.showPenaltyDialog}
          onClose={this.handlePenaltyDialogClose}
        />
      </React.Fragment>
    );
  }
}

export default MatchSpeedDial;
