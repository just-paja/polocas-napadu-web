import {
  GAMES,
} from '../constants';

export const getAvailableGames = () => GAMES.map(label => ({
  label,
  value: label,
}));

export const getLastGameId = state => state.board.games.length - 1;

export const getGameHistory = state => state.board.games;
