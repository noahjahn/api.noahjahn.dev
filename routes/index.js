const router = require('express').Router();
const visitors = require('../components/visitors');

router.use('/visitors', visitors);

module.exports = router;