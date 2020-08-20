const Mongo = require('./mongodb');

module.exports.init = () => {
    (new Mongo).connect(process.env.MONGODB_CONNECTION_STRING);
}