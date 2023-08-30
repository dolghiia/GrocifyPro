import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <div>
            <header className='grocifyHeader'>
                <div>
                    <h1 className="site-name">&nbsp;&nbsp;&nbsp;Grocify</h1>
                    <h5 className="site-name name-pro">Pro</h5>
                    <nav class='bg-grey-800 grocifyNav'>
                        <ul className="links">
                            <li className="page">
                                <Link to="/" className="site-links">
                                    <p className="site-links">Home</p>
                                </Link>
                            </li>
                            <li className="page">
                                <Link to="/grocery/" className="site-links">
                                    <p className="site-links">Grocery</p>
                                </Link>
                            </li>
                            <li className="page">
                                <Link to="/list/" className="site-links">
                                    <p className="site-links">List</p>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                    <p className="motto">"Your Virtual Grocery List!"</p>
                </div>
            </header>
        </div>
    )
}

export default Nav;