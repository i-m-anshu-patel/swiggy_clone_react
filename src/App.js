import './App.css';
import Header from './components/Header';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Restaurant from './components/Restaurant';
import Home from './components/Home';
import RestaurantMenu from './components/RestaurantMenu';

const App = () => {
  
  return (
    <>
      <Router>
        <Header />
        <div className='container my-3'>
          <Routes>
            <Route exact path='/' element={<Restaurant key={44} name="Restaurant Category" />} />
            <Route exact path='/about' element={<Home key="about" name="About" />} />
            <Route exact path='/cart' element={<Home key="cart" name="Cart" />} />
            <Route exact path='/restaurants/:resId' element={<RestaurantMenu />} />
          </Routes>
        </div>
      </Router>

    </>
  );
}

export default App;
