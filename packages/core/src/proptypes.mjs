import PropTypes from 'prop-types'

import * as constants from './constants.mjs'

export const Ident = PropTypes.string

export const Children = PropTypes.oneOfType([
  PropTypes.node,
  PropTypes.arrayOf(PropTypes.node),
])

export const Classes = PropTypes.objectOf(PropTypes.string)

export const ClassName = PropTypes.oneOfType([
  Classes,
  PropTypes.arrayOf(Classes),
  PropTypes.arrayOf(PropTypes.string),
  PropTypes.string,
])

export const ContestantType = PropTypes.oneOf([
  constants.CONTESTANT_HOME,
  constants.CONTESTANT_GUEST,
])

export const Band = PropTypes.shape({
  name: PropTypes.isRequired,
})

export const Location = PropTypes.shape({
  name: PropTypes.string.isRequired,
})

export const Profile = PropTypes.shape({
  avatar: PropTypes.string,
  alias: PropTypes.string,
  id: Ident.isRequired,
  name: PropTypes.string.isRequired,
})

export const Role = PropTypes.shape({
  id: Ident.isRequired,
  name: PropTypes.string.isRequired,
})

export const ShowParticipant = PropTypes.shape({
  id: Ident.isRequired,
  profile: Profile.isRequired,
  role: Role.isRequired,
})

export const ShowType = PropTypes.shape({
  description: PropTypes.string,
  id: Ident.isRequired,
  name: PropTypes.string.isRequired,
  shortDescription: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
})

export const Show = PropTypes.shape({
  id: Ident.isRequired,
  location: Location.isRequired,
  name: PropTypes.string.isRequired,
  participants: PropTypes.arrayOf(ShowParticipant),
  slug: PropTypes.string,
  start: PropTypes.string.isRequired,
})

export const ContestantGroup = PropTypes.shape({
  band: Band.isRequired,
  contestantType: ContestantType.isRequired,
})

export const Inspiration = PropTypes.shape({
  text: PropTypes.string.isRequired,
})

export const Game = PropTypes.shape({
  inspirations: PropTypes.arrayOf(Inspiration).isRequired,
  type: PropTypes.string.isRequired,
})

export const Stage = PropTypes.shape({
  game: Game,
  type: PropTypes.oneOf([
    constants.STAGE_INTRO,
    constants.STAGE_GAME_SETUP,
    constants.STAGE_GAME,
    constants.STAGE_VOTING,
    constants.STAGE_GAME_RESULTS,
    constants.STAGE_PAUSE,
    constants.STAGE_FINALE,
  ]),
})

export const Match = PropTypes.shape({
  closed: PropTypes.bool,
  currentStage: Stage,
  contestantGroups: PropTypes.arrayOf(ContestantGroup).isRequired,
  id: PropTypes.string.isRequired,
  show: Show.isRequired,
})

export const ErrorType = PropTypes.shape({
  message: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
})

export const ErrorMessage = PropTypes.oneOfType([PropTypes.node, ErrorType])

export const FoulType = PropTypes.shape({
  name: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
})

export const GameRules = PropTypes.shape({
  name: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
})

export const Side = PropTypes.oneOf([
  constants.TEAM_SIDE_LEFT,
  constants.TEAM_SIDE_RIGHT,
])

export const I18n = PropTypes.shape({
  options: PropTypes.shape({
    allLanguages: PropTypes.arrayOf(PropTypes.string).isRequired,
    defaultLanguage: PropTypes.string,
  }),
})

export const UsualPlace = PropTypes.shape({
  description: PropTypes.string.isRequired,
  id: Ident.isRequired,
  location: Location.isRequired,
  name: PropTypes.string.isRequired,
  placeType: PropTypes.number,
})

export const ImageObject = PropTypes.shape({
  height: PropTypes.number.isRequired,
  src: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
})

export const Image = PropTypes.oneOfType([PropTypes.string, ImageObject])

export const Sponsor = PropTypes.shape({
  id: Ident.isRequired,
  logo: Image.isRequired,
  name: PropTypes.string.isRequired,
})

export const Photo = PropTypes.shape({
  description: PropTypes.string,
  id: Ident,
  image: Image,
})

export const propsTranslated = {
  t: PropTypes.func.isRequired,
}

export const UrlBase = {
  host: PropTypes.string.isRequired,
  origin: PropTypes.string.isRequired,
  protocol: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
}
