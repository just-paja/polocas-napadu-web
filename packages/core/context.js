"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UrlBase = exports.MatchContext = exports.RouterContext = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const RouterContext = /*#__PURE__*/_react.default.createContext({});

exports.RouterContext = RouterContext;

const MatchContext = /*#__PURE__*/_react.default.createContext(null);

exports.MatchContext = MatchContext;

const UrlBase = /*#__PURE__*/_react.default.createContext();

exports.UrlBase = UrlBase;