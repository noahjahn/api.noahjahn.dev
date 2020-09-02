const express = require('express');
const cors = require('./cors');
const bodyParser = require('body-parser');
const authentication = require('./authentication');
const response = require('./response');
const routes = require('../routes');

module.exports = express()
    .use(cors())
    .use(bodyParser.json())
    .use(bodyParser.urlencoded({extended:true}))
    .use(authentication)
    .use(response.init)
    .use(routes)
    .use((req, res) => {
        res.status(404).sendFormat(req, res);
    });
