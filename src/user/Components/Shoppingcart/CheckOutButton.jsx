import React, { useState } from "react";

import Esewa from "../esewa/Esewa";

function CheckOutButton() {
  const [checkout, setCheckOut] = useState(false);
  return (
    <div>
      {checkout ? (
        <Esewa />
      ) : (
        <button
          className="bg-orange-500 text-white py-2 px-4 rounded-lg mt-4 w-full"
          onClick={() => setCheckOut(true)}
        >
          Checkout
        </button>
      )}
    </div>
  );
}

export default CheckOutButton;
