import React from "react"

const SortByPrice = ({ on_sort_type_selected }) => {
    
    const on_sort_changed = (sort_value) => {
        on_sort_type_selected(sort_value)
    }

    return (
        <div>
            <h5>Sort by Price</h5>
            <ul className="optionList">
                <li>
                    <button className="btn btnFilter" onClick={() => {on_sort_changed("none")}}>None</button>
                </li>
                <li>
                    <button className="btn btnFilter" onClick={() => {on_sort_changed("low")}}>Sort: Low to High</button>
                </li>
                <li>
                    <button className="btn btnFilter" onClick={() => {on_sort_changed("high")}}>Sort: High to Low</button>
                </li>
            </ul>
        </div>
    )
}

export default SortByPrice