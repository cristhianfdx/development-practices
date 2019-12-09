const express = require('express');
const router = express.Router();

const employee = require('../controllers/employee_controller');

router.route('/')
    .get(employee.getEmployees)
    .post(employee.createEmployee)

router.route('/:id')
    .get(employee.getOneEmployee)
    .put(employee.editEmployee)
    .delete(employee.deleteEmployee)

module.exports = router;