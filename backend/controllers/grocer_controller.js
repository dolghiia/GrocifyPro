const food = require('../models/food')
const mongoose = require('mongoose')

const get_all_foods = async (req, res) => {
    const foods = await food.find({}).sort({updatedAt: -1})
    res.status(200).json(foods)
}

const get_one_food = async (req, res) => {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'Invalid ID Provided'})
    }

    const one_food = await food.findById(id)
    if (!one_food) {
        return res.status(404).json({error: 'Food with ID not found'})
    }
    res.status(200).json(one_food)
}

module.exports = {
    get_all_foods,
    get_one_food
}