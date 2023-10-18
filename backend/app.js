const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
const mongoClient = require('mongoose');
const dbUrl = require('./config/db');

const subRoutes = require('./endpoints/sub');
const userRoutes = require('./endpoints/user');

const bodyParser = require('body-parser');

mongoClient.connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true, authSource: 'admin' }, function (err, db) {
    if (err) {
        console.log("Auth Failed");
        return;
    }
    console.log("MongoDB Connected");
    // db.close();
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api/sub', subRoutes);
app.use('/api/user', userRoutes);

//Define error handler
app.use((req, res, next) => {
    const error = new Error('Please read api document and retry');
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        Status: error.status,
        Message: error.message,
        context: 'api'
    });
});

module.exports = app;