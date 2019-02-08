import PropTypes from 'prop-types';
import React from 'react';
import TextField from '@material-ui/core/TextField';

import { withStyles } from '@material-ui/core/styles';

import InteractiveButton from './InteractiveButton';

const styles = theme => ({
  controls: {
    display: 'flex',
    marginTop: theme.spacing.unit * 2,
    alignItems: 'baseline',
  },
  error: {
    color: theme.palette.error.main,
    marginLeft: theme.spacing.unit * 2,
    marginTop: 0,
  }
});

class InspirationForm extends React.Component {
  constructor() {
    super();
    this.handleInspirationChange = this.handleInspirationChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      inspiration: '',
    };
  }

  handleInspirationChange(event) {
    this.setState({ inspiration: event.target.value });
  }

  handleSubmit() {
    this.props.onSubmit(this.state);
  }

  render() {
    const { classes, error, saving } = this.props;
    return (
      <div>
        <h2>Vložit inspiraci</h2>
        <p>
          Prosíme vás o krátké, třeba dvouslovné téma, které využijeme jako
          inspiraci do scének. Tedy potom, co si z nich rozhodčí vybere :-)
        </p>
        <form onSubmit={this.handleSubmit}>
          <div>
            <TextField
              disabled={saving}
              id="inspirationField"
              label="Inspirace"
              onChange={this.handleInspirationChange}
              value={this.state.inspiration}
              helperText="Inspirace může být cokoliv, třeba 'Poslední tramvaj', 'Pán s taškou' nebo 'Stroj na lásku'"
              variant="outlined"
            />
          </div>
          <div className={classes.controls}>
            <InteractiveButton
              loading={saving}
              disabled={!this.state.inspiration}
              type="submit"
              color="primary"
              variant="outlined"
            >
              Vložit
            </InteractiveButton>
            {!saving && error ? (
              <p className={classes.error}>
                {error.graphQLErrors && error.graphQLErrors.some(error => error.message === 'already-exists')
                  ? 'Toto téma již v košíčku existuje'
                  : 'Něco se pokazilo. Zkuste to prosím znovu.'}</p>
            ) : null}
          </div>
        </form>
      </div>
    );
  }
}

InspirationForm.propTypes = {
  error: PropTypes.shape({ message: PropTypes.string }),
  saving: PropTypes.bool,
};

InspirationForm.defaultProps = {
  error: null,
  saving: false,
};

export default withStyles(styles)(InspirationForm);
