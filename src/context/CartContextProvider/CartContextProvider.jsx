/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const CartContext = createContext(null);

function CartContextProvider({ children }) {
  const [productsInCart, setProductsInCart] = useState(() => {
    return JSON.parse(localStorage.getItem("products")) || [];
  });

  return (
    <CartContext.Provider value={{ productsInCart, setProductsInCart }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartContextProvider;
