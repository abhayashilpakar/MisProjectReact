import React from "react";
import Navbar from "./Components/Navbar/Navbar";

import { BrowserRouter, Routes, Route } from "react-router-dom";

// import Product from "./Components/Pages/Product";
// import Customers from "./Components/Pages/Customers";
// import Pricing from "./Components/Pages/Pricing";
// import Resources from "./Components/Pages/Resources";

import AllProduct from "./Components/allProduct";
import Home from "./Pages/Home";
import Footer from "./Components/Footer/Footer";
import Shop from "./Pages/Shop";
import Contact from "./Pages/Contact";
import About from "./Pages/About";

import ShopContextProvider from "./context/ShopContext";
import ProductDetail from "./Components/Productdetail/ProductDetail";
import ShoppingCart from "./Components/Shoppingcart/ShoppingCart";
import LoginPage from "./Components/Login/LoginPage";
import SignIn from "./Components/Signin/SignIn";
// import LoginPage from "./Components/Login/LoginPage";

function App() {
  const url = window.location.href;

  return (
    <>
      <ShopContextProvider>
        <BrowserRouter>
          {!url.includes("login") && <Navbar />}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            {/* <Route path="/" element={<Navbar></Navbar>}></Route> */}
            <Route path="/productdetail/:_id" element={<ProductDetail />} />
            <Route path="/shoppingcart" element={<ShoppingCart />} />
            <Route path="/product" element={<AllProduct />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/siginup" element={<SignIn />} />
          </Routes>

          {!url.includes("login") && <Footer />}
        </BrowserRouter>
      </ShopContextProvider>
    </>
  );
}

export default App;
