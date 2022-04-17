var express = require('express');
var logger = require('morgan');

var appRouter = require('./routes/app.route');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', appRouter);

module.exports = app;
