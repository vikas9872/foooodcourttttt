import './App.css';
import Navbar from './Components/NavbarComponent/Navbar';
import HomePage from './Components/HomePageComponent/HomePage';
import AboutPage from './Components/AboutPageComponent/AboutPage';
import DishesPage  from './Components/DishesPageComponent/DishesPage';
import MenuPage from './Components/MenuPageComponent/MenuPage';
import ReviewPage from './Components/ReviewsComponent/ReviewPage';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <HomePage/>
      <AboutPage/>
      <DishesPage/>
      <MenuPage/>
      <ReviewPage/>
    </div>
  );
}

export default App;
