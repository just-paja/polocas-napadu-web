import PropTypes from 'prop-types';
import React from 'react';

import { gql } from 'apollo-boost';

import GraphContainer from '../../components/GraphContainer';

const GET_MATCH_INSPIRATION_QR = gql`
  query($matchId: Int!) {
    match(id: $matchId) {
      show {
        inspirationQrUrl
      }
    }
  }
`

const ShowSetupStage = ({ data, ...props }) => (
  <img
    src={data.match.show.inspirationQrUrl}
    alt="invite"
    {...props}
  />
);

ShowSetupStage.propTypes = {
  data: PropTypes.shape({
    match: PropTypes.shape({
      show: PropTypes.shape({
        inspirationQrUrl: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
};

export default GraphContainer(ShowSetupStage, GET_MATCH_INSPIRATION_QR);
