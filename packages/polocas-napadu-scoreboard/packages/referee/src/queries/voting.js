import { gql } from 'apollo-boost';

export const getScorePointPoll = gql`
  query ScorePointPoll($matchStageId: Int!) {
    scorePointPoll(matchStageId: $matchStageId) {
      votings {
        id,
        closed,
        avgVolume,
        contestantGroup {
          id
        }
      },
      winner {
        contestantGroup {
          id
        }
      }
    }
  }`;

export const saveVolumeScrape = gql`
  mutation ScrapeStageVolume($livePollVotingId: Int!, $volume: Float!) {
    scrapeStageVolume(livePollVotingId: $livePollVotingId, volume: $volume) {
      volumeScrape {
        id,
        created,
      }
    }
  }`;

export const startScorePointVoting = gql`
  mutation ScorePointVotingStart($contestantGroupId: Int!) {
    startScorePointVoting(contestantGroupId: $contestantGroupId) {
      voting {
        id,
        poll {
          id
        }
      }
    }
  }`;

export const closeLivePollVoting = gql`
  mutation ScorePointVotingClose($livePollVotingId: Int!) {
    closeLivePollVoting(livePollVotingId: $livePollVotingId) {
      livePollVoting {
        id,
        closed
      }
    }
  }`;
