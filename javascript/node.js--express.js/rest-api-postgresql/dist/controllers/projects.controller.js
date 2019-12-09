"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getProjects = getProjects;
exports.createProject = createProject;
exports.getOneProject = getOneProject;
exports.deleteProject = deleteProject;
exports.updateProject = updateProject;

var _index = _interopRequireDefault(require("../models/index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var Project = _index["default"].Project;

function getProjects(_x, _x2) {
  return _getProjects.apply(this, arguments);
}

function _getProjects() {
  _getProjects = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(req, res) {
    var projects;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return Project.findAll();

          case 2:
            projects = _context.sent;
            res.json({
              data: projects
            });

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _getProjects.apply(this, arguments);
}

function createProject(req, res) {
  var _req$body = req.body,
      name = _req$body.name,
      priority = _req$body.priority,
      description = _req$body.description,
      deliverydate = _req$body.deliverydate;
  Project.create({
    name: name,
    priority: priority,
    description: description,
    deliverydate: deliverydate
  }).then(function (result) {
    return res.status(201).json({
      message: "Project saved"
    });
  })["catch"](function (err) {
    return res.status(500).json({
      message: err.message
    });
  });
}

function getOneProject(_x3, _x4) {
  return _getOneProject.apply(this, arguments);
}

function _getOneProject() {
  _getOneProject = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2(req, res) {
    var id, project;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            id = req.params.id;
            _context2.prev = 1;
            _context2.next = 4;
            return Project.findOne({
              where: {
                id: id
              }
            });

          case 4:
            project = _context2.sent;

            if (project) {
              res.json({
                data: project
              });
            } else {
              res.json({
                data: {}
              });
            }

            _context2.next = 11;
            break;

          case 8:
            _context2.prev = 8;
            _context2.t0 = _context2["catch"](1);
            res.status(500).json({
              message: _context2.t0.message
            });

          case 11:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[1, 8]]);
  }));
  return _getOneProject.apply(this, arguments);
}

function deleteProject(_x5, _x6) {
  return _deleteProject.apply(this, arguments);
}

function _deleteProject() {
  _deleteProject = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee3(req, res) {
    var id;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            id = req.params.id;
            _context3.prev = 1;
            _context3.next = 4;
            return Project.destroy({
              where: {
                id: id
              }
            });

          case 4:
            res.json({
              message: "Project deleted"
            });
            _context3.next = 10;
            break;

          case 7:
            _context3.prev = 7;
            _context3.t0 = _context3["catch"](1);
            res.status(500).json({
              message: _context3.t0.message
            });

          case 10:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[1, 7]]);
  }));
  return _deleteProject.apply(this, arguments);
}

function updateProject(_x7, _x8) {
  return _updateProject.apply(this, arguments);
}

function _updateProject() {
  _updateProject = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee4(req, res) {
    var id, _req$body2, name, priority, description, deliverydate;

    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            id = req.params.id;
            _req$body2 = req.body, name = _req$body2.name, priority = _req$body2.priority, description = _req$body2.description, deliverydate = _req$body2.deliverydate;
            _context4.prev = 2;
            _context4.next = 5;
            return Project.update({
              name: name,
              priority: priority,
              description: description,
              deliverydate: deliverydate
            }, {
              where: {
                id: id
              }
            });

          case 5:
            res.json({
              message: "Project updated"
            });
            _context4.next = 11;
            break;

          case 8:
            _context4.prev = 8;
            _context4.t0 = _context4["catch"](2);
            res.status(500).json({
              message: _context4.t0.message
            });

          case 11:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[2, 8]]);
  }));
  return _updateProject.apply(this, arguments);
}