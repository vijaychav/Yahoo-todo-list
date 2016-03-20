require('./database'); //to connect to database and create model

var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var routes = require('./routes/index');
var logger = require('morgan');

var app = express();
//configuration
app.use(express.static(path.join(__dirname, '/public')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({'extended':'true'}));
app.use(bodyParser.json({type: 'application/vnd.api+json'}));

//redirecting to requests to routes
app.use('/', routes);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

//creating and starting server
port = 8080;
var server = app.listen(port, function() {
    console.log('Express server listening on port ' + server.address().port);
});


module.exports = app;


