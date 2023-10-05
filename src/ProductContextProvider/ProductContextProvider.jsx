import { createContext, useState } from "react";

export const ProductContext = createContext(null);

function ProductContextProvider({ children }) {
  const [product, setProduct] = useState(null);

  return <div></div>;
}

export default ProductContextProvider;
