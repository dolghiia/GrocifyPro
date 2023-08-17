import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Nav from './pages/components/nav.js'
import Home from './pages/home.js'
import GroceryView from './pages/grocery_view.js';
import GroceryItem from './pages/grocery_item.js';
import Footer from './pages/components/footer.js';
import { GroceryListProvider}  from './context/grocery_list_context.js';

function App() {
  return (
    <GroceryListProvider>
      <div className="App">
        <BrowserRouter>
          <Nav />
          <div className='pages'>
            <Routes>
              <Route
                path='/'
                element={<Home />}
              />
              <Route
                path='/grocery'
                element={<GroceryView />}
              />
              <Route 
                path='/grocery/:id'
                element={<GroceryItem />}
              />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </div>
    </GroceryListProvider>
  );
}

export default App;
