import React, { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";

function OrderDetail({ data }) {
  const { id, price, title } = data;
  const { cartItems } = useContext(ShopContext);
  const totalAmount = (cartItems[id] || 0) * price;

  return (
    <tr>
      <td>{id}</td>
      <td>{title}</td>
      <td>{cartItems[id]}</td>

      <td>{price}</td>
      <td>{totalAmount}</td>
    </tr>
  );
}

export default OrderDetail;
