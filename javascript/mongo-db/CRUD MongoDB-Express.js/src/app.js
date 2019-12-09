var express = require('express');
var logger = require('morgan');
var bodyParser = require('body-parser');//entender peticiones POST
var path = require('path');

var app = express();

var indexRoutes = require('./controller/task_controller.js');

//Settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//middlewares
app.use(logger('dev'));
app.use(bodyParser.urlencoded({extended : false}));

//config routes
app.use('/', indexRoutes);


app.listen(app.get('port'), () => {
    console.log('server on port : ', app.get('port'));
});