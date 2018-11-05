import classnames from 'classnames';
import camelCase from 'camelcase';
import PropTypes from 'prop-types';
import React from 'react';

import { withStyles } from '@material-ui/core/styles';

import * as constants from '../../board/constants';

const styles = {
  name: {
    fontSize: '3rem',
  },
  nameBar: {
    display: 'flex',
    alignItems: 'flex-start',
  },
  nameBarRight: {
    textAlign: 'left',
    justifyContent: 'flex-start',
  },
  nameBarLeft: {
    textAlign: 'right',
    justifyContent: 'flex-end',
  },
  logo: {
    maxHeight: '3rem',
    margin: '0 1rem',
  },
};

const TeamDetails = ({ classes, side, team }) => {
  if (!team) {
    return null;
  }
  const contents = [
    <span className={classes.name} key="name">{team.name}</span>,
    <img
      className={classes.logo}
      src={team.logo || constants.TEAM_LOGO_DEFAULT}
      alt="Team logo"
      key="logo"
    />,
  ];
  return (
    <div>
      <div
        className={classnames(
          classes.nameBar,
          classes[camelCase(`nameBar-${side}`)]
        )}
      >
        {side === 'right' ? contents.reverse() : contents}
      </div>
    </div>
  );
};

TeamDetails.propTypes = {
  name: PropTypes.string,
  side: PropTypes.string,
  logo: PropTypes.string,
};

export default withStyles(styles)(TeamDetails);
