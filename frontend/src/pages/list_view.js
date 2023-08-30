import { useEffect, useState } from "react"
import ListCard from "./components/list_card"


const ListView = () => {
    const [grocery_list, set_grocery_list] = useState([])
    const [total_price, set_total_price] = useState(0)
    const [total_savings, set_total_savings] = useState(0)

    const update_total_price = () => {
        var total = 0;
        for (let i = 0; i < grocery_list.length; i++) {
            total = total + (grocery_list[i].price * grocery_list[i].quantity);
        }
        set_total_price(total)
    }

    const update_total_savings = () => {
        var savings = 0
        for (let i = 0; i < grocery_list.length; i++) {
            savings = savings + (grocery_list[i].price * grocery_list[i].quantity);
        }
        set_total_savings(savings)
    }

    useEffect(() => {
        const fetch_foods = async () => {
            const response = await fetch("/api/grocery_list/")
            const json = await response.json()

            if (response.ok) {
                await set_grocery_list(json)
            }
        }

        fetch_foods()
    }, [])

    return (
        <div className="groceryPage">
            <div className="listViewPagination">
                <div className="listView">
                    {grocery_list && grocery_list.map((list_item) => (
                        <ListCard
                        key={list_item.grocer_id}
                        list_item={list_item}
                        />
                    ))}
                </div>
            </div>
            <div className="listSummary">
                <h5> Total Price</h5>
                <p> ${total_price} </p>
                <br />
                <h5> Savings</h5>
                <p>${total_savings}</p>
            </div>
        </div>
    )
}

export default ListView