const passport = require('passport');
const router = require('express').Router();
const jsonwebtoken = require('jsonwebtoken');

router.post('/login', passport.authenticate('headerapikey', { session: false }), (req, res) => {
    res.data = {
        jwt: jsonwebtoken.sign({
            user: req.user
        },
            process.env.JWT_SECRET,
            {
                expiresIn: '1h',
            },
        ),
    }
    res.status(200).sendFormat(req, res);
});

module.exports = router;
