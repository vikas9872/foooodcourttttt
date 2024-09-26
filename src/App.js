import './App.css';
import { Routes, Route } from 'react-router-dom'
import Navbar from './Components/NavbarComponent/Navbar';
import HomePage from './Components/HomePageComponent/HomePage';
import AboutPage from './Components/AboutPageComponent/AboutPage';
import DishesPage  from './Components/DishesPageComponent/DishesPage';
import MenuPage from './Components/MenuPageComponent/MenuPage';
import ReviewPage from './Components/ReviewsComponent/ReviewPage';
import Login from './Components/FormComponent/Login'
import Signup from './Components/FormComponent/Signup'
import CartPage from './Components/CartPageComponent/CartPage';
function App() {
  return (
    <div className="App">
      <Navbar/>
        <Routes>
          <Route path='/' element={<HomePage/>}></Route>
          <Route path='about' element={<AboutPage/>}></Route>
          <Route path='spacialdishes' element={<DishesPage/>}></Route>
          <Route path='menu' element={<MenuPage/>}></Route>
          <Route path='reviews' element={<ReviewPage/>}></Route>
          <Route path='addtocart' element={<CartPage/>}></Route>
          <Route path='signin' element={<Signup/>}></Route>
          <Route path='login' element={<Login/>}></Route>
        </Routes>
      {/* <Forms/> */}
    </div>
  );
}

export default App;
