"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.compatLogWarning = exports.logWarning = exports.logError = void 0;

/* eslint-disable no-console */
const logError = error => {
  console.error(error);
};

exports.logError = logError;

const logWarning = error => {
  console.warn(error);
};

exports.logWarning = logWarning;

const compatLogWarning = (next, error) => {
  logWarning(error);
};

exports.compatLogWarning = compatLogWarning;