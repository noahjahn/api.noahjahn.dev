const express = require('express');
const bodyParser = require('body-parser');
const response = require('./response');
const routes = require('../routes');

module.exports = express()
    .use(bodyParser.json())
    .use(response.init)
    .use(routes)
    .use((req, res) => {
        res.status(404).sendFormat(req, res);
    });
