"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.propsTranslated = exports.Photo = exports.Sponsor = exports.Image = exports.ImageObject = exports.UsualPlace = exports.I18n = exports.Side = exports.GameRules = exports.FoulType = exports.ErrorMessage = exports.ErrorType = exports.Match = exports.Stage = exports.Game = exports.Inspiration = exports.ContestantGroup = exports.Show = exports.ShowType = exports.ShowParticipant = exports.Role = exports.Profile = exports.Location = exports.Band = exports.ContestantType = exports.ClassName = exports.Classes = exports.Children = exports.Ident = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var constants = _interopRequireDefault(require("./constants"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Ident = _propTypes.default.string;
exports.Ident = Ident;

const Children = _propTypes.default.oneOfType([_propTypes.default.node, _propTypes.default.arrayOf(_propTypes.default.node)]);

exports.Children = Children;

const Classes = _propTypes.default.objectOf(_propTypes.default.string);

exports.Classes = Classes;

const ClassName = _propTypes.default.oneOfType([Classes, _propTypes.default.arrayOf(Classes), _propTypes.default.arrayOf(_propTypes.default.string), _propTypes.default.string]);

exports.ClassName = ClassName;

const ContestantType = _propTypes.default.oneOf([constants.CONTESTANT_HOME, constants.CONTESTANT_GUEST]);

exports.ContestantType = ContestantType;

const Band = _propTypes.default.shape({
  name: _propTypes.default.isRequired
});

exports.Band = Band;

const Location = _propTypes.default.shape({
  name: _propTypes.default.string.isRequired
});

exports.Location = Location;

const Profile = _propTypes.default.shape({
  avatar: _propTypes.default.string,
  alias: _propTypes.default.string,
  id: Ident.isRequired,
  name: _propTypes.default.string.isRequired
});

exports.Profile = Profile;

const Role = _propTypes.default.shape({
  id: Ident.isRequired,
  name: _propTypes.default.string.isRequired
});

exports.Role = Role;

const ShowParticipant = _propTypes.default.shape({
  id: Ident.isRequired,
  profile: Profile.isRequired,
  role: Role.isRequired
});

exports.ShowParticipant = ShowParticipant;

const ShowType = _propTypes.default.shape({
  description: _propTypes.default.string,
  id: Ident.isRequired,
  name: _propTypes.default.string.isRequired,
  shortDescription: _propTypes.default.string.isRequired,
  slug: _propTypes.default.string.isRequired
});

exports.ShowType = ShowType;

const Show = _propTypes.default.shape({
  id: Ident.isRequired,
  location: Location.isRequired,
  name: _propTypes.default.string.isRequired,
  showsParticipants: _propTypes.default.arrayOf(ShowParticipant),
  slug: _propTypes.default.string,
  start: _propTypes.default.string.isRequired
});

exports.Show = Show;

const ContestantGroup = _propTypes.default.shape({
  band: Band.isRequired,
  contestantType: ContestantType.isRequired
});

exports.ContestantGroup = ContestantGroup;

const Inspiration = _propTypes.default.shape({
  text: _propTypes.default.string.isRequired
});

exports.Inspiration = Inspiration;

const Game = _propTypes.default.shape({
  inspirations: _propTypes.default.arrayOf(Inspiration).isRequired,
  type: _propTypes.default.string.isRequired
});

exports.Game = Game;

const Stage = _propTypes.default.shape({
  game: Game,
  type: _propTypes.default.oneOf([constants.STAGE_INTRO, constants.STAGE_GAME_SETUP, constants.STAGE_GAME, constants.STAGE_VOTING, constants.STAGE_GAME_RESULTS, constants.STAGE_PAUSE, constants.STAGE_FINALE])
});

exports.Stage = Stage;

const Match = _propTypes.default.shape({
  closed: _propTypes.default.bool,
  currentStage: Stage,
  contestantGroups: _propTypes.default.arrayOf(ContestantGroup).isRequired,
  id: _propTypes.default.string.isRequired,
  show: Show.isRequired
});

exports.Match = Match;

const ErrorType = _propTypes.default.shape({
  message: _propTypes.default.string.isRequired,
  name: _propTypes.default.string.isRequired
});

exports.ErrorType = ErrorType;

const ErrorMessage = _propTypes.default.oneOfType([_propTypes.default.node, ErrorType]);

exports.ErrorMessage = ErrorMessage;

const FoulType = _propTypes.default.shape({
  name: _propTypes.default.string.isRequired,
  slug: _propTypes.default.string.isRequired
});

exports.FoulType = FoulType;

const GameRules = _propTypes.default.shape({
  name: _propTypes.default.string.isRequired,
  slug: _propTypes.default.string.isRequired
});

exports.GameRules = GameRules;

const Side = _propTypes.default.oneOf([constants.TEAM_SIDE_LEFT, constants.TEAM_SIDE_RIGHT]);

exports.Side = Side;

const I18n = _propTypes.default.shape({
  options: _propTypes.default.shape({
    allLanguages: _propTypes.default.arrayOf(_propTypes.default.string).isRequired,
    defaultLanguage: _propTypes.default.string
  })
});

exports.I18n = I18n;

const UsualPlace = _propTypes.default.shape({
  description: _propTypes.default.string.isRequired,
  id: Ident.isRequired,
  location: Location.isRequired,
  name: _propTypes.default.string.isRequired,
  placeType: _propTypes.default.number
});

exports.UsualPlace = UsualPlace;

const ImageObject = _propTypes.default.shape({
  height: _propTypes.default.number.isRequired,
  src: _propTypes.default.string.isRequired,
  width: _propTypes.default.number.isRequired
});

exports.ImageObject = ImageObject;

const Image = _propTypes.default.oneOfType([_propTypes.default.string, ImageObject]);

exports.Image = Image;

const Sponsor = _propTypes.default.shape({
  id: Ident.isRequired,
  logo: Image.isRequired,
  name: _propTypes.default.string.isRequired
});

exports.Sponsor = Sponsor;

const Photo = _propTypes.default.shape({
  description: _propTypes.default.string,
  id: Ident,
  image: Image
});

exports.Photo = Photo;
const propsTranslated = {
  t: _propTypes.default.func.isRequired
};
exports.propsTranslated = propsTranslated;