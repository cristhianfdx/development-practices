"use strict";

var _express = _interopRequireDefault(require("express"));

var _consign = _interopRequireDefault(require("consign"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _express["default"])();
(0, _consign["default"])({
  cwd: __dirname
}).include('libs/middlewares.js').then('libs/boot.js').into(app);