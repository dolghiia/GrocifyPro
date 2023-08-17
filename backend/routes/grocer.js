const express = require('express')
const { get_all_foods, get_one_food } = require('../controllers/grocer_controller')
const router = express.Router()

router.get('/', get_all_foods)

router.get('/:id', get_one_food)

module.exports = router