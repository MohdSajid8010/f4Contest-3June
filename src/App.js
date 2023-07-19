import React from "react";
import Home from "./Component/Home";
import NavBar from "./Component/NavBar"
import CartPage from "./Component/CartPage";
import './App.css';
import {Routes,Route} from "react-router-dom";


//Frontend 4 Contest-3 June
const App=()=> {
  return (
    <div className="big-container">
      <NavBar/>

      

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/cart" element={<CartPage/>}/>
      </Routes>
      
      
    </div>
  );
}

export default App;
