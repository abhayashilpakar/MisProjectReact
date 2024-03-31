import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../../context/ShopContext";
import CartItem from "./CartItem";
import axios from "axios";
import CheckOutButton from "./CheckOutButton";
import "./shoppingcart.css";
import Orderdetail from "./orderdetail";

function ShoppingCart() {
  // State to store fetched products
  const [products, setProducts] = useState([]);
  const [button, setButton] = useState(true);

  // const redirectToLink = () => {
  //   window.location.href = "https://rc-epay.esewa.com.np";
  // };

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
            {button ? (
              <div className="md:w-3/4">
                <div className="bg-white rounded-lg shadow-md p-6 mb-4">
                  <table className="w-full">
                    <thead>
                      <tbody>
                        <th className="text-left font-semibold">Product</th>
                        <th className="text-left font-semibold">Price</th>
                        <th className="text-left font-semibold">Quantity</th>
                        <th className="text-left font-semibold">Total</th>
                      </tbody>
                    </thead>
                    {/* Map over products that are in the cart and render CartItem component */}
                    {cartProducts.map((product) => (
                      <CartItem key={product.id} data={product} />
                    ))}
                  </table>
                </div>
              </div>
            ) : (
              <div className="md:w-3/4">
                <table>
                  <tr>
                    <th>Sn</th>
                    <th>Itemname</th>
                    <th>Qty</th>
                    <th>Price</th>
                    <th>total</th>
                  </tr>

                  {cartProducts.map((productss) => (
                    <Orderdetail
                      key={productss.id}
                      data={productss}
                      CartItems={cartItems}
                    />
                  ))}
                </table>
              </div>
            )}

            <div className="md:w-1/4">
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-lg font-semibold mb-4">Summary</h2>
                <div className="flex justify-between mb-2">
                  <span>Subtotal</span>
                  <span>{totalAmount}</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span>Vat</span>
                  <span>13%</span>
                </div>

                <hr className="my-2" />
                <div className="flex justify-between mb-2">
                  <span className="font-semibold">Total</span>
                  <span className="font-semibold">
                    {totalAmount !== 0
                      ? totalAmount + (totalAmount * 13) / 100
                      : 0}
                  </span>
                </div>
                <button onClick={() => setButton(false)}>
                  <CheckOutButton />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div>
        <form
          action="https://rc-epay.esewa.com.np/api/epay/main/v2/form"
          method="POST"
        >
          <input type="text" id="amount" name="amount" value="100" required />
          <input
            type="text"
            id="tax_amount"
            name="tax_amount"
            value="10"
            required
          />
          <input
            type="text"
            id="total_amount"
            name="total_amount"
            value="110"
            required
          />
          <input
            type="text"
            id="transaction_uuid"
            name="transaction_uuid"
            required
          />
          <input
            type="text"
            id="product_code"
            name="product_code"
            value="EPAYTEST"
            required
          />
          <input
            type="text"
            id="product_service_charge"
            name="product_service_charge"
            value="0"
            required
          />
          <input
            type="text"
            id="product_delivery_charge"
            name="product_delivery_charge"
            value="0"
            required
          />
          <input
            type="text"
            id="success_url"
            name="success_url"
            value="https://esewa.com.np"
            required
          />
          <input
            type="text"
            id="failure_url"
            name="failure_url"
            value="https://google.com"
            required
          />
          <input
            type="text"
            id="signed_field_names"
            name="signed_field_names"
            value="total_amount,transaction_uuid,product_code"
            required
          />
          <input type="text" id="signature" name="signature" required />
          <input value="Submit" type="submit" />
        </form>
      </div> */}
    </>
  );
}

export default ShoppingCart;
