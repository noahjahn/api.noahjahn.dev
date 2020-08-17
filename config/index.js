const Mongo = require('./mongodb');

module.exports.init = () => {
    (new Mongo).connect(`mongodb://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_HOST}/${process.env.MONGODB_DATABASE}?authSource=admin`);
}