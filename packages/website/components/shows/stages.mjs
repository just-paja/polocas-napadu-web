export const STAGE_SHOW_SETUP = 'A_1'
export const STAGE_INTRO = 'A_2'
export const STAGE_GAME_SETUP = 'A_3'
export const STAGE_GAME = 'A_4'
export const STAGE_VOTING = 'A_5'
export const STAGE_GAME_RESULTS = 'A_6'
export const STAGE_PAUSE = 'A_7'
export const STAGE_FINALE = 'A_8'

export const STAGE_OPTIONS = [
  {
    label: 'Nastavení zápasu',
    value: STAGE_SHOW_SETUP,
  },
  {
    label: 'Intro',
    value: STAGE_INTRO,
  },
  {
    label: 'Příprava kategorie',
    ignore: true,
    value: STAGE_GAME_SETUP,
  },
  {
    label: 'Hra',
    value: STAGE_GAME,
  },
  {
    label: 'Hlasování',
    ignore: true,
    value: STAGE_VOTING,
  },
  {
    label: 'Výsledky kategorie',
    ignore: true,
    value: STAGE_GAME_RESULTS,
  },
  {
    label: 'Přestávka',
    value: STAGE_PAUSE,
  },
  {
    label: 'Konec zápasu',
    value: STAGE_FINALE,
  },
]

export function getStageOption(stage) {
  return STAGE_OPTIONS.find(option => option.value === stage.type)
}
