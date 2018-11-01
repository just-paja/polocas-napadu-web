import * as constants from '../constants';

export const isSpectator = state => state.spectator.role === constants.ROLE_SPECTATOR;
