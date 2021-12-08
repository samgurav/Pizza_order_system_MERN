
import './App.css';

import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';
import { Home } from './components/Home';
import { SignUp } from './components/SignUp';
import { Login } from './components/Login';
import Menu from './components/Menu';
import { Cart } from './components/Cart';
import { AllOrders } from './components/AllOrders';
import { Order } from './components/Order';
import {Placed} from './components/Placed'
import { Profile } from './components/Profile';

function App() {
  return (
   <>
   <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/menu" element={<Menu/>} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/Allorders" element={<AllOrders/>} />
          <Route path="/order" element={<Order/>} />
          <Route path="/placed" element={<Placed/>} />
          <Route path="/profile" element={<Profile/>} />
        
        
         
        </Routes>
      </BrowserRouter>
   
   </>
  );
}

export default App;
