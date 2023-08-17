const Home = () => {
    return (
        <div className="home">
            <h1 className="main-text">Welcome to Grocify!</h1>
            <p className="main-text">Have you ever remembered what to put on your grocery list but your
            grocery list was nowhere to be found? <br></br>With Grocify, your grocery list is always with you wherever you go!</p>
            <div className="homeOne">
                <div className="homeOneLeft">
                    <img src="static/calendar.png" alt="how to roll up calendars in sharepoint icons png @transparentpng.com"></img>
                </div>
                <div className="homeOneRight">
                    <h3>Live Price Updates</h3>
                    <p>Get the most recent price from your favourite grocers, so you won't have to visit their websites!</p>
                </div>
            </div>
            <div className="homeTwo">
                <div className="homeTwoLeft">
                <h3>Never Forget Your Grocery List</h3>
                    <p>With Grocify, your grocery list will always be in your pocket! It's even easier than creating your own list! Browse your favourite foods, pick the best price, and add it to your list!</p>
                </div>
                <div className="homeTwoRight">
                    <img className="imageCart" src="static/cart.png" alt="how to roll up calendars in sharepoint icons png @transparentpng.com"></img>
                </div>
            </div>
            <div className="homeThree">
                <div className="homeThreeLeft">
                    <ul className="storeLogos">
                        <li><img className="imageSuperstore" src="static/superstorelogo.png" alt="how to roll up calendars in sharepoint icons png @transparentpng.com"></img></li>
                        <li><img className="imageLoblaws" src="static/loblawslogo.png" alt="how to roll up calendars in sharepoint icons png @transparentpng.com"></img></li>
                        <li><img className="imageNofrills" src="static/nofrillslogo.png" alt="how to roll up calendars in sharepoint icons png @transparentpng.com"></img></li>
                    </ul>
                </div>
                <div className="homeThreeRight">
                    <h3>The Best Resource for Grocery Price Matching</h3>
                    <p>Get price information from local grocers such as Superstore, Loblaws, and Nofrills, and many more!</p>
                </div>
            </div>
        </div>
    )
}

export default Home;