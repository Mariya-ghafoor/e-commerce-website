import "./App.css";
import LandingPage from "./pages/LandingPage/LandingPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import ProductPage from "./pages/ProductPage/ProductPage";
import ProductsPage from "./pages/ProductsPage/ProductsPage";
import CartPage from "./pages/CartPage/CartPage";
import CartContextProvider from "./context/CartContextProvider/CartContextProvider";

function App() {
  return (
    <BrowserRouter>
      <NavBar />

      <CartContextProvider>
        <Routes>
          <Route path="/e-commerce-website" element={<LandingPage />} />
          <Route
            path="/e-commerce-website/products"
            element={<ProductsPage />}
          />
          <Route
            path="/e-commerce-website/products/:id"
            element={<ProductPage />}
          />
          <Route path="/e-commerce-website/cart" element={<CartPage />} />
        </Routes>
      </CartContextProvider>
    </BrowserRouter>
  );
}

export default App;
