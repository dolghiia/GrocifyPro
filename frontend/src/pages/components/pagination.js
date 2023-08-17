import React from "react"

const Pagination = ({ foods_per_page, total_foods, paginate }) => {
    const page_numbers = [];

    for (let i = 1; i <= Math.ceil(total_foods / foods_per_page); i++) {
        page_numbers.push(i);
    }

    return (
        <nav>
            <ul className="pagination">
                {page_numbers.map(number => (
                    <li key={number} className="page-item">
                        <button onClick={() => paginate(number)} className="page-link">
                            {number}
                        </button>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Pagination