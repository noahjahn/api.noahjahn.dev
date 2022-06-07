const express = require('express');
const cors = require('./cors');
const helmet = require('helmet')
const bodyParser = require('body-parser');
const authentication = require('./authentication');
const response = require('./response');
const routes = require('../routes');

module.exports = express()
    .use(cors())
    .use(bodyParser.json())
    .use(helmet())
    .use(bodyParser.urlencoded({ extended: true }))
    .use(authentication)
    .use(response.init)
    .use(routes)
    .use((req, res) => {
        res.status(404).sendFormat(req, res);
    });
