const mongoose = require('mongoose');

function MongoDb (connectionString) {
    this.connection;
    this.connectionString = connectionString
    this.connect = async (connectionString = null) => {
        this.connection = await mongoose.connect(connectionString || this.connectionString, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }).catch((err) => {
            console.log('Error on start: ' + err.stack);
            process.exit(1);
          });
    };
};

module.exports = MongoDb;

