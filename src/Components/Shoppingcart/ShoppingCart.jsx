import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../../context/ShopContext";
import CartItem from "./CartItem";
import axios from "axios";

function ShoppingCart() {
  // State to store fetched products
  const [products, setProducts] = useState([]);

  // Fetch products from backend when component mounts
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          "http://localhost:3001/api/getproducts"
        );
        setProducts(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  // Get cart items and total cart amount from context
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();

  // Filter products to only include those in the cart
  const cartProducts = products.filter((product) => cartItems[product.id] > 0);

  return (
    <>
      <div className="bg-gray-100 py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl font-semibold mb-4">Shopping Cart</h1>

          <div className="flex flex-col md:flex-row gap-4">
            <div className="md:w-3/4">
              {/* Map over products that are in the cart and render CartItem component */}
              {cartProducts.map((product) => (
                <CartItem key={product.id} data={product} />
              ))}
            </div>

            <div className="md:w-1/4">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-lg font-semibold mb-4">Summary</h2>
                <div className="flex justify-between mb-2">
                  <span>Subtotal</span>
                  <span>${totalAmount}</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span>Taxes</span>
                  <span>$0.00</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span>Shipping</span>
                  <span>$0.00</span>
                </div>
                <hr className="my-2" />
                <div className="flex justify-between mb-2">
                  <span className="font-semibold">Total</span>
                  <span className="font-semibold">${totalAmount}</span>
                </div>
                <button className="bg-blue-500 text-white py-2 px-4 rounded-lg mt-4 w-full">
                  Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ShoppingCart;
