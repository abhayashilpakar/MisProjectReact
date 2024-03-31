import React, { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";

function CartItem({ data }) {
  const { id, img, price, title } = data;
  const { cartItems, removeToCart, addToCart, updateCartItemCount } =
    useContext(ShopContext);
  const totalAmount = (cartItems[id] || 0) * price;

  return (
    <>
      <tbody>
        <tr>
          <td className="py-4">
            <div className="flex items-center">
              <img className="h-16 w-16 mr-4" src={img} alt="Product" />
              <span className="font-semibold">{title}</span>
            </div>
          </td>
          <td className="py-4">{price}</td>
          <td className="py-4">
            <div className="flex items-center">
              <button
                className="border rounded-md py-2 px-4 mr-2"
                onClick={() => removeToCart(id)}
              >
                -
              </button>
              <input
                className="text-center w-8 "
                value={cartItems[id]}
                onChange={(e) =>
                  updateCartItemCount(Number(e.target.value), id)
                }
              />
              <button
                className="border rounded-md py-2 px-4 ml-2"
                onClick={() => addToCart(id)}
              >
                +
              </button>
            </div>
          </td>
          <td className="py-4">${totalAmount}</td>
        </tr>
      </tbody>
    </>
  );
}

export default CartItem;
