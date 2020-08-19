const router = require('express').Router();
const authentication = require('../components/authentication');
const visitors = require('../components/visitors');

router.use('/authentication', authentication);
router.use('/visitors', visitors);

module.exports = router;