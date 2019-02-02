export const MAX_PENALTIES = 3;

export const CONTESTANT_HOME = 'A_1';
export const CONTESTANT_GUEST = 'A_2';

export const STAGE_SHOW_SETUP = 'A_1';
export const STAGE_INTRO = 'A_2';
export const STAGE_GAME_SETUP = 'A_3';
export const STAGE_GAME = 'A_4';
export const STAGE_VOTING = 'A_5';
export const STAGE_GAME_RESULTS = 'A_6';
export const STAGE_PAUSE = 'A_7';
export const STAGE_FINALE = 'A_8';

export const STAGES = [
  STAGE_SHOW_SETUP,
  STAGE_INTRO,
  STAGE_GAME_SETUP,
  STAGE_GAME,
  STAGE_VOTING,
  STAGE_GAME_RESULTS,
  STAGE_PAUSE,
  STAGE_FINALE,
];

export const STAGES_JUMP = [
  STAGE_SHOW_SETUP,
  STAGE_INTRO,
  STAGE_GAME_SETUP,
  STAGE_PAUSE,
  STAGE_FINALE,
];

export const STAGE_OPTIONS = [
  {
    value: STAGE_SHOW_SETUP,
    label: 'Nastavení hry',
  },
  {
    value: STAGE_INTRO,
    label: 'Intro',
  },
  {
    value: STAGE_GAME_SETUP,
    label: 'Příprava kategorie',
  },
  {
    value: STAGE_GAME,
    label: 'Hra!',
  },
  {
    value: STAGE_VOTING,
    label: 'Hlasování',
  },
  {
    value: STAGE_GAME_RESULTS,
    label: 'Výsledky kategorie',
  },
  {
    value: STAGE_PAUSE,
    label: 'Přestávka',
  },
  {
    value: STAGE_FINALE,
    label: 'Konec zápasu',
  },
];

export const TEAM_LOGO_DEFAULT = '/default-logo.png';

export const TEAM_SIDE_LEFT = 'left';
export const TEAM_SIDE_RIGHT = 'right';
