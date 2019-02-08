import React from 'react';

import CustomInspirationDialog from './CustomInspirationDialog';
import InteractiveButton from './InteractiveButton';

class CustomInspirationSelection extends React.Component {
  constructor() {
    super();
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.state = {
      open: false,
    };
  }

  handleClose() {
    this.setState({ open: false });
  }

  handleOpen() {
    this.setState({ open: true });
  }

  render() {
    return (
      <React.Fragment>
        <InteractiveButton onClick={this.handleOpen}>
          Zadat ručně
        </InteractiveButton>
        <CustomInspirationDialog
          open={this.state.open}
          onClose={this.handleClose}
        />
      </React.Fragment>
    );
  }
}

export default CustomInspirationSelection;
