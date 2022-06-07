const cors = require('cors');
const User = require('../config/mongodb/models/user');

module.exports = () => {
    corsOptions = {
        origin: (origin, callback) => {
            if (!origin) {
                return callback(null, true);
            } else {
                User.findOne({ origins: origin })
                    .then((user) => {
                        if (user) {
                            callback(null, origin);
                        } else {
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
