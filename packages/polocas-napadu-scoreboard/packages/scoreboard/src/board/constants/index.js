export const STAGE_GAME = 'GAME'; // Show just the inspiration and game name during game
export const STAGE_GAME_RESULTS = 'GAME_RESULTS'; // Show inspiration and scoreboard
export const STAGE_FINALE = 'FINALE'; // Show the winner and looser
export const STAGE_GAME_SETUP = 'GAME_SETUP'; // Show score and game inspiration
export const STAGE_PAUSE = 'PAUSE'; // Show all selected topics in the game
export const STAGE_SHOW_SETUP = 'SHOW_SETUP'; // Show just team names and logos
export const TEAM_GUEST = 'guest';
export const TEAM_HOME = 'home';
export const TEAM_LEFT = 'left';
export const TEAM_LOGO_DEFAULT = '/default-logo.png';
export const TEAM_RIGHT = 'right';

export const STAGE_FLOW = {
  [STAGE_SHOW_SETUP]: [
    STAGE_GAME_SETUP,
  ],
  [STAGE_GAME_RESULTS]: [
    STAGE_GAME_SETUP,
    STAGE_PAUSE,
    STAGE_FINALE,
  ],
  [STAGE_GAME_SETUP]: [
    STAGE_GAME,
  ],
  [STAGE_GAME]: [
    STAGE_GAME_RESULTS,
  ],
  [STAGE_PAUSE]: [
    STAGE_GAME_SETUP,
    STAGE_FINALE,
  ],
};

export const STAGE_FLOW_BACK = {
  [STAGE_GAME_RESULTS]: [
    STAGE_GAME,
  ],
  [STAGE_GAME_SETUP]: [
    STAGE_SHOW_SETUP,
  ],
  [STAGE_GAME]: [
    STAGE_GAME_SETUP,
  ],
  [STAGE_PAUSE]: [
    STAGE_GAME_SETUP,
  ],
  [STAGE_FINALE]: [
    STAGE_PAUSE,
  ],
};

export const STAGES_SCORE_CHANGES = [
  STAGE_GAME_RESULTS,
  STAGE_GAME_SETUP,
];
