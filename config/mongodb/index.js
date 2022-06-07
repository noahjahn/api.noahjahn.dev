const mongoose = require('mongoose');

function MongoDb(connectionString) {
    this.connection;
    this.connectionString = connectionString
    this.connect = async (connectionString = null) => {
        this.connection = await mongoose.connect(connectionString || this.connectionString, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        }).catch((error) => {
            console.error('Error on start: ' + error.stack);
            process.exit(1);
        });
    };
};

module.exports = MongoDb;
