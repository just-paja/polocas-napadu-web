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

export const STAGES_SCORE_CHANGES = [
  STAGE_GAME_RESULTS,
  STAGE_GAME_SETUP,
];

export const STAGES_TEAM_EDITS = [
  STAGE_SHOW_SETUP,
];

export const STAGES_GAME_SETUP = [
  STAGE_GAME_SETUP,
];

export const STAGES_WITH_GAME = [
  STAGE_GAME_RESULTS,
  STAGE_GAME_SETUP,
  STAGE_GAME,
];

export const STAGES_GAME_RESET = [
  STAGE_GAME_RESULTS,
];

export const GAMES = [
  'Barman song',
  'Báseň od publika',
  'Co tím chceš jako říct',
  'Červená knihovna',
  'Čtverec',
  'Dabing ABC',
  'Dabing filmu',
  'Dabovaná',
  'Diapozitivy',
  'Dopis',
  'Duál',
  'Duet',
  'Dům a zahrada',
  'Dva na pět',
  'Dvojitá stíhačka',
  'En face',
  'Filmové žánry',
  'Kam zmizel ten starý song',
  'Komiks',
  'Kvartet',
  'Loutky',
  'Love song',
  'Metafory',
  'Mikrofon',
  'Monolog',
  'Národní divadlo',
  'Nátlak',
  'Opilecká píseň',
  'Počet slov',
  'Poetická',
  'Polovina času',
  'Poslední věta',
  'Prskavka',
  'Prskavka ala šanson',
  'Překlad do znakové řeči',
  'Pyramida',
  'Reklamace',
  'Rozhlasová hra',
  'Ruce',
  'Ryba (ve čtyřech)',
  'S rekvizitou',
  'Sci-fi',
  'Schizofrenie',
  'Smrt v 1 minutě',
  'Spoon river',
  'Sportovní komentátor',
  'Stíhačka',
  'Šumlovaná',
  'Šumlovaná se simultánním překladem',
  'Tam a zpět',
  'Televizní komentátor',
  'Toaster',
  'Trojitá stíhačka',
  'Věty z kapsy',
  'Vnitřní hlasy',
  'Volná',
  'Vyprávěná',
  'Vysílání FM',
  'Western',
  'Změna',
  'Zpívaná',
  'Žánrová vyprávěná',
  'Ženy vs muži (kategorie)',
  'Živé rekvizity',
];
