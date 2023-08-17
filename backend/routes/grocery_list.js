const express = require('express')
const { get_one_food_from_list, 
        get_all_foods_from_list, 
        add_one_food_to_list,
        update_one_food_from_list,
        remove_one_food_from_list } = require('../controllers/list_controller')
const router = express.Router()

router.get('/', get_all_foods_from_list)

router.get('/:id', get_one_food_from_list)

router.post('/', add_one_food_to_list)

router.patch('/:id', update_one_food_from_list)

router.delete('/:id', remove_one_food_from_list)


module.exports = router