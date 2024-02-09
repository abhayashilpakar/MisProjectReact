import React, { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";
import ProductData from "../../data/ProductData";
import CartItem from "./CartItem";

function ShoppingCart() {
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();
  return (
    <>
      <div className="bg-gray-100 py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-2xl font-semibold mb-4">Shopping Cart</h1>

          <div className="flex flex-col md:flex-row gap-4">
            <div className="md:w-3/4">
              {/* {ProductData.map((product) => {
                if (cartItems[product.id] !== 0) {
                  return <CartItem data={product} />;
                }
              })} */}

              {ProductData.filter((product) => cartItems[product.id] !== 0).map(
                (product) => (
                  <CartItem key={product.id} data={product} />
                )
              )}
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

      {/* 
      <div>
       
        {ProductData.filter((product) => cartItems[product.id] !== 0).map(
          (product) => (
            <CartItem key={product.id} data={product} />
          )
        )}
      </div> */}
    </>
  );
}

export default ShoppingCart;
