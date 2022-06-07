const router = require('express').Router();
const users = require('../components/users');
const visitors = require('../components/visitors');

router.use('/users', users);
router.use('/visitors', visitors);

module.exports = router;
