const mongoose = require('mongoose');

const itemsSchema = new mongoose.Schema({
    ProductName: String,
    Price: Number,
    Brand: String,
    Specifications: String,
    StockQuantity: Number,
    category: String
});

module.exports = mongoose.model('item',itemsSchema);