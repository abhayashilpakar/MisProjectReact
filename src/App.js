import React from "react";
import Navbar from "./user/Components/Navbar/Navbar";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import AllProduct from "./user/Components/allProduct";
import Home from "./user/Pages/Home";
import Footer from "./user/Components/Footer/Footer";
import Shop from "./user/Pages/Shop";
import Contact from "./user/Pages/Contact";
import About from "./user/Pages/About";

import ShopContextProvider from "./user/context/ShopContext";
import ProductDetail from "./user/Components/Productdetail/ProductDetail";
import ShoppingCart from "./user/Components/Shoppingcart/ShoppingCart";
// import LoginPage from "./user/Components/Login/LoginPage";
// import SignIn from "./user/Components/Signin/SignIn";
import Profile from "./user/Components/Profile/Profile";
// import ProtectedRoutesComponent from "./user/Components/ProtectedRoutesComponent";
// import SideBar from "./admin/Component/SideBar";
import Sucess from "./user/Components/esewa/sucess";

function App() {
  const url = window.location.href;

  return (
    <>
      <ShopContextProvider>
        <BrowserRouter>
          {!url.includes("/sucess") && <Navbar />}

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/productdetail/:id" element={<ProductDetail />} />
            <Route path="/shoppingcart" element={<ShoppingCart />} />
            <Route path="/product" element={<AllProduct />} />
            <Route path="/sucess" element={<Sucess />} />

            {/* <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignIn />} /> */}

            {/* <Route element={<ProtectedRoutesComponent admin={true} />} />
            <Route path="/admin" element={<SideBar />} />
            <Route path="/admin/getallproduct" element={<Home />} /> */}
          </Routes>

          {!url.includes("/sucess") && <Footer />}
        </BrowserRouter>
      </ShopContextProvider>
    </>
  );
}

export default App;
