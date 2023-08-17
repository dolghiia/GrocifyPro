const list = require('../models/list')
const mongoose = require('mongoose')

const get_all_foods_from_list = async (req, res) => {
    const foods = await list.find({}).sort({updatedAt: -1})
    res.status(200).json(foods)
}

const get_one_food_from_list = async (req, res) => {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'Invalid ID Provided'})
    }

    const one_food = await list.findById(id)
    if (!one_food) {
        return res.status(404).json({error: 'Food with ID not found'})
    }
    res.status(200).json(one_food)
}

const add_one_food_to_list = async (req, res) => {
    const { name, price, grocer, quantity, image, updatedAt, grocer_id } = req.body
    
    try {
        const list_item = await list.create({name, price, grocer, quantity, image, updatedAt, grocer_id})
        res.status(200).json(list_item)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

const remove_one_food_from_list = async (req, res) => {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'Invalid ID Provided'})
    }

    const delete_food = await list.findOneAndDelete({_id: id})
    if (!delete_food) {
        return res.status(404).json({error: 'No such food'})
    }
    res.status(200).json(delete_food)
}

const update_one_food_from_list = async (req, res) => {
    const { id } = req.params

    const find_food = await list.findOne({grocer_id: id})
    if (!find_food) {
        return res.status(404).json({error: 'No such food'})
    }
    req.body.quantity = req.body.quantity + find_food.quantity
    const update_food = await list.findOneAndUpdate({grocer_id: id,}, {...req.body})
    res.status(200).json(update_food)
}



module.exports = {
    get_all_foods_from_list,
    get_one_food_from_list,
    add_one_food_to_list,
    remove_one_food_from_list,
    update_one_food_from_list
}