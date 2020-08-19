var passport = require('passport');
const { HeaderAPIKeyStrategy } = require('passport-headerapikey');
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

module.exports = passport.initialize();
