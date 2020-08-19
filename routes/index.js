const router = require('express').Router();
var passport = require('passport');
const authentication = require('../components/authentication');
const users = require('../components/users');
const visitors = require('../components/visitors');

router.use('/authentication', authentication);
router.use('/users', users);
router.use('/visitors', visitors);

module.exports = router;