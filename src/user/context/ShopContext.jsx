import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

// Create a context for managing shopping cart state
export const ShopContext = createContext(null);

function ShopContextProvider({ children }) {
  // State for storing fetched products
  const [products, setProducts] = useState([]);

  // State for managing the items in the cart
  const [cartItems, setCartItems] = useState({}); // Initialize as an empty object

  // Fetch products from the API when the componest mounts
  useEffect(() => {
    async function fetchData() {
      try {
        // Fetch product data from the API
        const response = await axios.get(
          "http://localhost:3001/api/getproducts"
        );
        const fetchedProducts = response.data;
        setProducts(fetchedProducts);

        // Initialize cart items based on fetched products
        const defaultCart = {};
        fetchedProducts.forEach((product) => {
          defaultCart[product.id] = 0;
        });
        setCartItems(defaultCart);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  // Calculate the total amount of all items in the cart
  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const itemId in cartItems) {
      if (cartItems.hasOwnProperty(itemId)) {
        const quantity = cartItems[itemId];
        if (quantity > 0) {
          const itemInfo = products.find(
            (product) => product.id === Number(itemId)
          );
          if (itemInfo) {
            totalAmount += quantity * itemInfo.price;
          } else {
            console.error(`Product with id ${itemId} not found.`);
          }
        }
      }
    }
    return totalAmount;
  };

  // Add an item to the cart
  const addToCart = (itemId) => {
    console.log("Adding item to cart:", itemId);
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  // Remove an item from the cart
  const removeToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  // Update the quantity of an item in the cart
  const updateCartItemCount = (newAmount, itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
  };

  const [totalAmount, setTotalAmount] = useState(0);
  // Define the context value with cart state and functions
  const contextValue = {
    cartItems,
    addToCart,
    removeToCart,
    updateCartItemCount,
    getTotalCartAmount,
    totalAmount,
    setTotalAmount,
  };

  // Provide the context value to its children components
  return (
    <ShopContext.Provider value={contextValue}>{children}</ShopContext.Provider>
  );
}

export default ShopContextProvider;
