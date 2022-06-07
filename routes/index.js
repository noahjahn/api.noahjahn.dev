const router = require('express').Router();
const passport = require('passport');
const authentication = require('../components/authentication');
const v1 = require('./v1');

router.get('/', (req, res) => {
    res.status(200).send();
});
router.use('/authentication', authentication);
router.use('/v1', passport.authenticate('jwt', { session: false }), v1);

module.exports = router;
