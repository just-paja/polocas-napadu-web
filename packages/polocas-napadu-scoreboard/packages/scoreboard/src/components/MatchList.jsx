import PropTypes from 'prop-types';
import React from 'react';

import { Classes, Match } from 'core/proptypes';
import { gql } from 'apollo-boost';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import { withStyles } from '@material-ui/core/styles';

import GraphContainer from './GraphContainer';

const styles = theme => ({
  menu: {
    background: theme.palette.background.default,
    paddingLeft: theme.spacing.unit * 4,
    paddingRight: theme.spacing.unit * 4,
    paddingBottom: theme.spacing.unit * 4,
  },
  item: {
    listStyle: 'none',
  },
  list: {
    margin: 0,
    padding: 0,
  },
  page: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    justifyContent: 'center',
    position: 'fixed',
    width: '100%',
  }
});

const GET_MATCHES = gql`
  query {
    matchList {
      id,
      contestantGroups {
        band {
          name,
        },
        contestantType,
      },
      show {
        name,
        start,
        location {
          name,
        }
      }
    }
  }
`;

const MatchList = ({ classes, data }) => (
  <div className={classes.page}>
    <div className={classes.menu}>
      <h1>Sledovat zápas</h1>
      <ul className={classes.list}>
        {data.matchList.map(match => (
          <li className={classes.item} key={match.id}>
            <Link to={`/match/${match.id}`}>
              {match.show.name}
            </Link><br />
            {match.show.location.name}<br />
            {match.show.start}
          </li>
        ))}
      </ul>
    </div>
  </div>
);

MatchList.propTypes = {
  classes: Classes.isRequired,
  data: PropTypes.shape({
    matchList: PropTypes.arrayOf(Match).isRequired,
  }).isRequired
};

export default GraphContainer(
  withRouter(withStyles(styles)(MatchList)),
  GET_MATCHES
);
