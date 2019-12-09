"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _tasks = require("../controllers/tasks.controller");

var router = (0, _express.Router)();
router.get('/', _tasks.getTasks);
router.post('/', _tasks.createTask);
router["delete"]('/:id', _tasks.deleteTask);
router.put('/:id', _tasks.updateTask);
router.get('/:id', _tasks.getOneTask);
router.get('/projects/:projectId', _tasks.getTaskByProject);
var _default = router;
exports["default"] = _default;