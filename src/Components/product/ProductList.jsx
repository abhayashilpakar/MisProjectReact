import React, { useContext } from "react";
import { FaRandom, FaRegHeart, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { ShopContext } from "../../context/ShopContext";

function ProductList({ _id, id, img, title, price }) {
  const { addToCart, cartItems } = useContext(ShopContext);

  const carItemAmount = cartItems[id];

  return (
    <>
      <div className="product-grid ">
        <div className="product-image  ">
          <div>
            <a href="a">
              <img className="pic-1" src={img} alt="Product" />
            </a>
          </div>
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
              <Link
                to={`/productdetail/${_id}`}
                data-tip="Product Detail "
                className="relative "
              >
                <FaSearch className="absolute left-2.5 top-2.5 text-lg" />
              </Link>
            </li>
          </ul>
        </div>

        <div className="product-content">
          <h3 className="title">
            <a href="q">{title}</a>
          </h3>
          <div className="price">${price}</div>

          <button className="add-to-cart text-" onClick={() => addToCart(id)}>
            Add To Cart{carItemAmount > 0 && <>({carItemAmount})</>}
          </button>
        </div>
      </div>
    </>
  );
}

export default ProductList;
