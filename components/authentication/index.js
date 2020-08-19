const passport = require('passport');
const router = require('express').Router();

router.post('/login', passport.authenticate('headerapikey', { session: false }), (req, res) => {
    console.log('authenticated!');
    res.status(200).sendFormat(req, res);
});


module.exports = router;