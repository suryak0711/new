import React,{useState} from 'react';
import Adminlogin from './component/admin/adminlogin';
import {Routes, Route,useLocation } from "react-router-dom";
import './design/design.css';
import Admindash from './component/admin/admindash';  
import 'bootstrap/dist/css/bootstrap.min.css';
import Addproduct from './component/admin/addproduct';
import View from './component/admin/viewproduct';
import Editproduct from './component/admin/editproduct';
import Productcard from './component/card';
import Footer from './component/userfooter';
import Contact from './component/contact';
import About from './component/about';
import BuyNow from './component/buynow';
import Order from './component/admin/oderdetail';
import Login from './component/userlogin';
import Homepage from './component/homepage';
import Header from './component/header';
import Userlist from './component/admin/userlist';
import Usercontact from './component/admin/usercontact';
import PaymentSuccess from './component/success';
import Register from './component/register';
import { AuthProvider } from './AuthContext';

function App() {
  const [username, setUsername] = useState('');
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith('/admin');
  return (
    <div className="App">
      <AuthProvider>
        {!isAdminRoute && <Header username={username} setUsername={setUsername} />}
      <Routes>
        <Route path="/admin/adminlogin" element={<Adminlogin/>}/>
        <Route path="/admin/admindash" element={<Admindash/>}/>
        <Route path="/admin/addproduct" element={<Addproduct/>}/>
        <Route path="/admin/viewproduct" element={<View/>}/>
        <Route path="/admin/editproduct/:id" element={<Editproduct/>}/>
        <Route path="/admin/orderdetail" element={<Order/>}/>
        <Route path="/admin/userdetail" element={<Userlist/>}/>
        <Route path="/admin/usercontact" element={<Usercontact/>}/>
        <Route path="/userfooter" element={<Footer/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/success" element={<PaymentSuccess/>}/>
        <Route path="/buynow/:id" element={<BuyNow/>}/>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About/>} />
        <Route path="/card" element={<Productcard/>}/>
        <Route path="/contact" element={<Contact/>} />
        <Route path="/register" element={<Register />} />
        <Route path="/userlogin" element={<Login setUsername={setUsername} />} />
      </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
