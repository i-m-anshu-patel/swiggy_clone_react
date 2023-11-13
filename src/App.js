import './App.css';
import Header from './components/Header';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from './components/Home';


const App = () => {
  return (
    <>
      <Router>
        <Header />
        <div className='container my-3'>
          <Routes>
            <Route exact path='/' element={<Home key="restaurant" name="Restaurant Category" />} />
            <Route exact path='/about' element={<Home key="about" name="About" />} />
            <Route exact path='/cart' element={<Home key="cart" name="Cart" />} />
          </Routes>
        </div>
      </Router>

    </>
  );
}

export default App;
