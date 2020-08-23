const mongoose = require('mongoose');

const vistorSchema = new mongoose.Schema({
    "origin": String,
    "locations": Array,
    "count": { type: Number, default: 1 },
    "darkMode": Boolean,
}, { 
    timestamps: true
});

module.exports = mongoose.model('Visitor', vistorSchema);