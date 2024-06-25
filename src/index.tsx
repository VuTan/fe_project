import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router,Route, Routes} from "react-router-dom";
import Login from "./component/Login/Login";
import SigUp from "./component/SigUp/SigUp";
import ProductDetail from "./component/Product/ProductDetail";
import ShopPage from "./component/Product/ShopPage";
import Cart from "./component/Cart/Cart";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
      <Router>
        <Routes >
          <Route path="/" element={ <App/>} />
          <Route path="/Login" element={<Login/>}/>
          <Route path="/SigUp" element={<SigUp/>}/>
          <Route path="/Detail" element={<ProductDetail/>}/>
            <Route path="/shop" element={<ShopPage/>}/>
            <Route path="/Cart" element={<Cart/>}/>
        </Routes >
      </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
