import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const GroceryItem = () => {
    const [food, set_food] = useState({})
    const [price, set_price] = useState("")
    const [grocer, set_grocer] = useState("nofrills")
    const {id} = useParams();

    useEffect(() => {
        const fetch_food = async () => {
            const response = await fetch(`/api/grocer/${id}`)
            const json = await response.json()

            if (response.ok) {
                await set_food(json)
                await set_price(json.prices.nofrills)
            }
        }
        fetch_food()
    }, [id])
    
    const change_displayed_price = (obj) => {
        console.log(obj)
        if (obj === "nofrills" && food.prices.nofrills) {
            set_grocer("nofrills")
            set_price(food.prices.nofrills)
        }
        else if (obj === "superstore" && food.prices.superstore) {
                set_grocer("superstore")
                set_price(food.prices.superstore)
        }
        console.log(price)
    }

    return (
        <div className="container mt-5 mb-5 groceryProductPage">
            <div className="row d-flex justify-content-center">
                <div className="col-md-10">
                    <div className="card itemCard">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="images p-3">
                                    <div className="text-center p-4"> <img id="main-image" src={food.image} alt="food" className="itemImage"/> </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="product p-4">
                                    <div className="d-flex justify-content-between align-items-center itemBack">
                                        <div className="d-flex align-items-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
                                            <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
                                        </svg>
                                            <Link to={"/grocery/"} className="itemLink"> <span className="ml-1">Back</span> </Link>
                                        </div>
                                    </div>
                                    <div className="mt-4 mb-3"> <span className="text-uppercase text-muted brand itemCategory">{food.category}</span>
                                        <h5 className="itemTitle">{food.name}</h5>
                                            <div className="price d-flex flex-row align-items-center">
                                                <span className="act-price itemPrice">${price}</span>
                                            </div>
                                    </div>
                                    <div className="sizes mt-5">
                                        <h6 className="itemStores">Grocers</h6>
                                        <label className="radio"> <input type="radio" name="size" value="nofrills" checked={grocer === "nofrills"} onChange={(e) => change_displayed_price(e.target.value)}/> <span>Nofrills</span> </label> <label className="radio"> <input type="radio" name="size" value="superstore" checked={grocer === "superstore"} onChange={(e) => change_displayed_price(e.target.value)}/> <span>Superstore</span> </label>
                                    </div>
                                    <div className="cart itemAddList align-items-center"> <button className="btn text-uppercase mr-2 px-4 addCart">Add to list</button> <i className="fa fa-heart text-muted"></i> <i className="fa fa-share-alt text-muted"></i> </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GroceryItem;