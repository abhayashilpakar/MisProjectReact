import React, { useContext } from "react";
import esewa from "../esewa/esewa.jpg";
import { EsewaPayment } from "@bisham/payment-package";
import { ShopContext } from "../../context/ShopContext";

const Esewa = () => {
  const { getTotalCartAmount } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();

  const handleSubmit = (e) => {
    e.preventDefault();
    const esewaPayment = new EsewaPayment();

    esewaPayment.initiate({
      amount: totalAmount,
      processId: `${Math.random()}`,
      deliveryCharge: 20,
      serviceCharge: 20,
      taxAmount: 20,
      totalAmount: totalAmount + 60,
      successRedirectUrl: "http://localhost:3005/sucess",
      failureRedirectUrl: "http://localhost:3005",
    });
  };

  return (
    <div>
      <p>Choose Payment Options.</p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="esewa" style={{ display: "flex", gap: "10px" }}>
          <input type="radio" name="payment" id="esewa" required />
          <img src={esewa} width="100px" alt="Esewa" />
        </label>
        <button
          type="submit"
          style={{
            background: "orange",
            width: "max-content",
            padding: "10px 15px",
            borderRadius: "20px",
            color: "white",
          }}
        >
          Check out
        </button>
      </form>
    </div>
  );
};

export default Esewa;
