var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var employeesController = require('../../controller/employees');

router.post('/employees/getallemployees', (req, res, next) => { ///employees/getallemployees
    employeesController.getallemployees(req, res, next);
});

router.post('/player/getplayerlist', (req, res, next) => {

});

module.exports = router;