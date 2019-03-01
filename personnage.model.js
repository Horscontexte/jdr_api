const mongoose = require('mongoose');

const PersonnageSchema = mongoose.Schema({
    title: String,
    description: String,
    age: Number,
    job: String,
    imgurl: String,
}, {
    timestamps: true
});

module.exports = mongoose.model('Personnages', PersonnageSchema);
