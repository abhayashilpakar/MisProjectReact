import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { FaRandom, FaRegHeart, FaSearch } from "react-icons/fa";

const AllProduct = () => {
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
    <div className="container-xl flex flex-column  py-5">
      <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product, index) => (
          <ProductData key={index} {...product} />
        ))}
      </div>
    </div>
  );
};

function ProductData({ img, title, price }) {
  return (
    <div className="product-grid ">
      <div className="product-image ">
        <a href="{#}" className="">
          <img className="pic-1" src={img} alt="Product" />
          <p className="">this is image </p>
        </a>
        <ul className="product-links">
          <li>
            <Link href="{}" data-tip="Add " className="relative ">
              <FaRegHeart className="absolute left-2.5 top-2.5 text-lg" />
            </Link>
          </li>
          <li>
            <Link href="{}" data-tip="Add to Wishlist" className="relative ">
              <FaRandom className="absolute left-2.5 top-2.5 text-lg" />
            </Link>
          </li>
          <li>
            <Link data-tip="Product Detail " className="relative ">
              <FaSearch className="absolute left-2.5 top-2.5 text-lg" />
            </Link>
          </li>
        </ul>
      </div>
      <div className="product-content">
        <h3 className="title">
          <a href=" {} ">{title}</a>
        </h3>
        <div className="price">{price}</div>
        <a className="add-to-cart" href=" ">
          add to cart
        </a>
      </div>
    </div>
  );
}

export default AllProduct;
