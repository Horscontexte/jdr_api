const mongoose = require('mongoose');

const LieuSchema = mongoose.Schema({
    title: String,
    histoire: String,
    climat: String,
    howto: String,
    imgurl: String,
    hotspot: String,
}, {
    timestamps: true
});

module.exports = mongoose.model('Lieux', LieuSchema);
