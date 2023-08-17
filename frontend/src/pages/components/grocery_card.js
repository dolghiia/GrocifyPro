import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useGroceryList }  from '../../context/grocery_list_context'

const GroceryCard = ( {food} ) => {
    const [quantity, set_quantity] = useState(0)
    const [error, set_error] = useState(null)
    const {
        get_item_quantity,
        increase_list_quantity
    } = useGroceryList()

    const handle_add_food = async (e) => {
        if (quantity < 1) {
            return
        }
        e.preventDefault()

        var food_price = 0
        var food_grocer = ""
        if (Math.min(food.prices.nofrills, food.prices.superstore) === food.prices.nofrills) {
            food_price = food.prices.nofrills
            food_grocer = "nofrills"
        }
        else {
            food_price = food.prices.superstore
            food_grocer = "superstore"
        }
        
        var api_type = "/api/grocery_list/" + food._id.toString()
        var api_method = "PATCH"
        if (get_item_quantity(food._id.toString()) === 0) {
            api_type = "/api/grocery_list/"
            api_method = "POST"
        }

        const food_item = {name: food.name,
                           price: food_price,
                           grocer: food_grocer,
                           quantity: quantity,
                           image: food.image,
                           updatedAt: new Date(Date.now()),
                           grocer_id: food._id.toString()
                        }

        const response = await fetch(api_type, {
            method: api_method,
            body: JSON.stringify(food_item),
            headers: {
                "Content-Type": "application/json"
            }
        })
        const json = await response.json()

        if (!response.ok) {
            set_error(json.error)
            console.log(error)
        }
        if (response.ok) {
            set_error(null)
            console.log("new food added/updated", json)
            increase_list_quantity(food._id.toString(), quantity)
        }
        set_quantity(0)
    }

    const increase_quantity = () => {
        if (quantity < 99) {
            set_quantity(quantity + 1)
        }
    }

    const decrease_quantity = () => {
        if (quantity > 0) {
            set_quantity(quantity - 1)
        }
    }

    return (
            <div class="d-flex justify-content-center align-items-center container px-2 grocifyCard">
                <div class="card groceryViewCard">
                        <div class="middle">
                            <img src={food.image} alt="food" className="mt-3 groceryImage"></img>
                            <div className="card-body cardBody">
                                    <Link to={`/grocery/${food._id.toString()}`} className="itemLink">
                                        <p className='card-title groceryTitle'>{food.name}</p>
                                    </Link>
                            </div>
                        </div>
                        <div class="bottom d-flex flex-row justify-content-center">
                            <div class="input-group mb-3 quantityField">
                                <button class="input-group-text changeQuantity" onClick={() => {increase_quantity()}}>+</button>
                                <input type="text" class="form-control quantityText" value={quantity}/>
                                <button class="input-group-text lowerQuantity" onClick={()=> {decrease_quantity()}}>--</button>
                            </div>
                            <button class="btn btn-success btn-sm add" onClick={(event) => {handle_add_food(event)}}>Add For <b>${Math.min(food.prices.nofrills, food.prices.superstore)}</b></button>
                        </div>
                </div>
            </div>
    )
}

export default GroceryCard