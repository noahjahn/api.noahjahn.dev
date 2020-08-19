var passport = require('passport');
const { HeaderAPIKeyStrategy } = require('passport-headerapikey');
const JwtStrategy = require('passport-jwt').Strategy;
const { ExtractJwt } = require('passport-jwt');
const User = require('../config/mongodb/models/user');

passport.use(new HeaderAPIKeyStrategy(
    { header: 'X-Api-Key', prefix: '' },
    false,
    function (apikey, done) {
        User.findOne({ apikey: apikey }, (err, user) => {
            if (err) {
                console.error(err);
                return done(err);
            }
            if (!user) {
                console.log(apikey);
                return done(null, false);
            }

            return done(null, user);
        });
    }
));

const jwtOptions = {
    "jwtFromRequest": ExtractJwt.fromAuthHeaderAsBearerToken(),
    "secretOrKey": process.env.JWT_SECRET || 'local'
}

passport.use(new JwtStrategy(jwtOptions, (jwtPayload, done) => {
    User.findOne({ id: jwtPayload.user.id }, (err, user) => {
        if (err) {
            console.error(err);
            return done(err);
        }
        if (!user) {
            return done(null, false);
        }
        return done(null, user);
    });
}));

module.exports = passport.initialize();
