const mongoose = require('mongoose')

const list_schema = new mongoose.Schema({
    name: String,
    price: Number,
    grocer: String,
    quantity: Number,
    image: String,
    updatedAt: Date,
    grocer_id: String
},
{ collection : "lists" })

module.exports = mongoose.model("List", list_schema)