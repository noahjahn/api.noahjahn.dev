const passport = require('passport');
const { HeaderAPIKeyStrategy } = require('passport-headerapikey');
const JwtStrategy = require('passport-jwt').Strategy;
const { ExtractJwt } = require('passport-jwt');
const User = require('../config/mongodb/models/user');

passport.use(new HeaderAPIKeyStrategy(
    { header: 'X-Api-Key' },
    false,
    function (apikey, done) {
        User.findOne({ apikey: apikey }, (error, user) => {
            if (error) {
                console.error(error);
                return done(error);
            }
            if (!user) {
                return done(null, false);
            }

            return done(null, user);
        });
    }
));

const jwtOptions = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.JWT_SECRET || 'local'
}

passport.use(new JwtStrategy(jwtOptions, (jwtPayload, done) => {
    User.findOne({ id: jwtPayload.user.id }, (error, user) => {
        if (error) {
            console.error(error);
            return done(error);
        }
        if (!user) {
            return done(null, false);
        }
        return done(null, user);
    });
}));

module.exports = passport.initialize();
