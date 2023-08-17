import React from "react"

const FilterGroceryItems = ({ on_filter_value_selected }) => {
    
    const on_filter_changed = (filter_value) => {
        on_filter_value_selected(filter_value)
    }

    return (
        <div>
            <ul className="optionList">
                <li>
                    <button className="btn btnFilter" onClick={() => {on_filter_changed("all")}}>All</button>
                </li>
                <li>
                    <button className="btn btnFilter" onClick={() => {on_filter_changed("fruits")}}>Fruits</button>
                </li>
                <li>
                    <button className="btn btnFilter" onClick={() => {on_filter_changed("vegetables")}}>Vegetables</button>
                </li>
                <li>
                    <button className="btn btnFilter" onClick={() => {on_filter_changed("dairy")}}>Dairy</button>
                </li>
                <li>
                    <button className="btn btnFilter" onClick={() => {on_filter_changed("bakery")}}>Bakery</button>
                </li>
            </ul>
        </div>
    )
}

export default FilterGroceryItems