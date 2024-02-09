import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./product.css";
import Productdata from "../../data/ProductData";

// import { FaRandom, FaSearch, FaRegHeart } from "react-icons/fa";
import ProductList from "./ProductList";
import axios from "axios";

function Product() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    try {
      async function fetch() {
        const response = await axios.get(
          "http://localhost:3001/api/getproducts"
        );
        console.log(response);
        setProducts(response.data);
      }
      fetch();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <div className="container-xl flex flex-column items-center py-5">
      <div className="text-center p-7">
        <h1 className=" font-bold text-4xl mb-4 uppercase">
          Our Trending Products
        </h1>
      </div>
      <div className=" grid  grid-cols-2  sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4 ">
        {products.map((product, index) => (
          <ProductList key={index} {...product} />
        ))}
      </div>
    </div>
  );
}

export default Product;
