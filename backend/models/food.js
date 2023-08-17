const mongoose = require('mongoose')

const food_schema = new mongoose.Schema({
    name: String,
    prices: {
        nofrills: Number,
        superstore: Number
    },
    category: String,
    image: String,
    updatedAt: Date
},
{ collection : "foods" })

module.exports = mongoose.model("Food", food_schema)