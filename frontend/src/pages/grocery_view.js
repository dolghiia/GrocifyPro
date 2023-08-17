import { useEffect, useState } from "react"

import GroceryCard from "./components/grocery_card"
import Pagination from "./components/pagination"
import FilterGroceryItems from "./components/filter_grocery_items"
import SortByPrice from "./components/sort_by_price"

const GroceryView = () => {
    const [foods, set_foods] = useState([])
    const [current_page, set_current_page] = useState(1)
    const [foods_per_page] = useState(24)
    const [grocery_filter, set_grocery_filter] = useState("all")
    const [sort_filter, set_sort_filter] = useState("none")
    const [query, set_query] = useState("")

    useEffect(() => {
        const fetch_foods = async () => {
            const response = await fetch("/api/grocer/")
            const json = await response.json()

            if (response.ok) {
                set_foods(json)
            }
        }

        fetch_foods()
    }, [])
    
    // filter foods
    const filtered_foods = foods.filter((food) => {
        console.log(grocery_filter)
        if (grocery_filter === "all") {
            return food
        }
        else {
            return food.category === grocery_filter
        }
    })

    // sort foods
    const sorted_foods = filtered_foods
    if (sort_filter === "low") {
        sorted_foods.sort((a,b) => Math.min(a.prices.nofrills, a.prices.superstore) - Math.min(b.prices.nofrills, b.prices.superstore))
    }
    else if (sort_filter === "high") {
        sorted_foods.sort((a,b) => Math.min(b.prices.nofrills, b.prices.superstore) - Math.min(a.prices.nofrills, a.prices.superstore))
    }

    // filter on search query
    const searched_foods = sorted_foods.filter(food => {
        return food.name.toLowerCase().includes(query.toLowerCase())
    })

    // get current foods
    const index_of_last_food = current_page * foods_per_page
    const index_of_first_food = index_of_last_food - foods_per_page
    const current_foods = searched_foods.slice(index_of_first_food, index_of_last_food)

    // change page
    const paginate = (page_number) => {
        set_current_page(page_number)
        document.body.scrollTop = 0
        document.documentElement.scrollTop = 0
    }

    const on_filter_value_selected = (filter_value) => {
        set_grocery_filter(filter_value)
    }

    const on_sort_type_selected = (sort_value) => {
        set_sort_filter(sort_value)
    }

    return (
        <div className="groceryPage">
            <div className="groceryViewPagination">
                <div className="groceryView card-group">
                    {current_foods && current_foods.map((food) => (
                        <GroceryCard
                        key={food._id}
                        food={food}
                        />
                    ))}
                </div>
                <div className="paginate">
                    <Pagination 
                    foods_per_page={foods_per_page} 
                    total_foods={searched_foods.length} 
                    paginate={paginate}
                    />
                </div>
            </div>
            <div className="modifyGrocery">
                <h5> Search </h5>
                <input value={query} placeholder="Search groceries" className="searchGrocery" onChange={e => set_query(e.target.value)} type="search"/>
                <br />
                <h5> Category </h5>
                <FilterGroceryItems 
                on_filter_value_selected={on_filter_value_selected}
                />
                <SortByPrice
                on_sort_type_selected={on_sort_type_selected}
                />
            </div>
        </div>
    )
}

export default GroceryView