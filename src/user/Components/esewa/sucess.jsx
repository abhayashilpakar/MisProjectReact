import React from "react";
import "./success.css";

function sucess() {
  return (
    <div className="sucess">
      <div className="sucessCard">
        <div
          Style={{
            borderRadius: "200px",
            height: "200px ",
            width: "200px",
            background: "#F8FAF5",
            margin: "0 auto",
          }}
        >
          <i className="checkmark">✓</i>
        </div>
        <h1>Success</h1>
        <p>
          We received your purchase request;
          <br /> we'll be in touch shortly!
        </p>
      </div>
    </div>
  );
}

export default sucess;
