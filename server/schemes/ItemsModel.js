const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ItemModel = new Schema({
    id: String,
    series: String,
    name: String,
    details: String,
    __v: { type: Number, select: false},
});

module.exports = mongoose.model('Item', ItemModel);