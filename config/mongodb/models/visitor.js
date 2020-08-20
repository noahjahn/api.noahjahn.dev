const mongoose = require('mongoose');

const vistorSchema = new mongoose.Schema({
    "ipAddress": String,
    "location": mongoose.Schema.Types.Mixed,
    "origin": String,
    "darkMode": Boolean,
}, { 
    timestamps: true
});

module.exports = mongoose.model('Visitor', vistorSchema);