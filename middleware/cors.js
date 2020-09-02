const cors = require('cors');
const User = require('../config/mongodb/models/user');

module.exports = () => {
    corsOptions = {
        origin: async (origin, callback) => {
            console.log(origin);
            if (!origin) { 
                return callback(null, true);
            } else {
                User.findOne({ origins: origin})
                .then((user) => {
                    console.log(user);
                    if (user) {
                        callback(null, true);
                    } else {
                        console.log('error!');
                        callback(new Error('Not allowed by CORS'));
                    }
                })
                .catch((error) => {
                    callback(error);
                });
            }
        }
    }
    return cors(corsOptions);
};