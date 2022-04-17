const express = require('express');
const logger = require('morgan');
const createError = require('http-errors');

const appRouter = require('./routes/app.route');
/**
 * database connection
 */
require("./db/connection.db");

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', appRouter);

/**
 * error handler
 */
app.use((_req, _res, next) => { next(createError(404)); });
app.use((err, req, res, _next) => {
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    res.status(err.status || 404);
    res.status(404).json({ path: req.originalUrl, success: false, result: { error: "Path does`nt exist" } });

    // uncaught Exception handler
    process.on("uncaughtException", (err) => {
        console.log("UNCAUGHT EXCEPTION, APP SHUTTING DOWN NOW!!");
        console.log(err.message, err.name);
        res.status(500).json({ path: req.originalUrl, success: false, result: { error: "Internal server error" } });
        process.exit(1);
    });
});

module.exports = app;
