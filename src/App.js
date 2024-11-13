import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MyNavbar from './Components/Navbar/Navbar';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import LoginSignup from './Pages/LoginSignup';
import Cart from './Pages/Cart';
import Footer from './Components/Footer/Footer';

import men_banner from './Components/Assets/banner_mens.png';
import women_banner from './Components/Assets/banner_women.png';
import kids_banner from './Components/Assets/banner_kids.png';

function App() {
  return (
    <BrowserRouter>
      <MyNavbar />
      <Routes>
        <Route path='/login' element={<LoginSignup />} />
        <Route path='/' element={<Shop />} />
        <Route path='/men' element={<ShopCategory banner={men_banner} category="men" />} />
        <Route path='/women' element={<ShopCategory banner={women_banner} category="women" />} />
        <Route path='/kids' element={<ShopCategory banner={kids_banner} category="kids" />} />
        <Route path='/product' element={<Product />}>
          <Route path=':productId' element={<Product />} />
        </Route>
        <Route path='/cart' element={<Cart />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
