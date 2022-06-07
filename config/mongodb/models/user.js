const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    'uuid': {
        type: String,
        required: true,
        index: true,
        unqiue: true
    },
    'username': {
        type: String,
        required: true,
        index: true,
        unique: true
    },
    'apikey': String,
    'origins': Array,
}, {
    timestamps: true
});

module.exports = mongoose.model('User', userSchema);
