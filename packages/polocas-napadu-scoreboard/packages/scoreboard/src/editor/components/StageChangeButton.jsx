import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

class StageChangeButton extends Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  getStageName() {
    return this.props.stage;
  }

  handleClick() {
    const { onClick, stage } = this.props;
    onClick(stage);
  }

  render() {
    return (
      <Button onClick={this.handleClick} variant="outlined">
        {this.getStageName()}
      </Button>
    );
  }
}

StageChangeButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  stage: PropTypes.string.isRequired,
}

export default StageChangeButton;
