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
    <BrowserRouter basename="/e-commerce-website/">
      <NavBar />

      <CartContextProvider>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/:id" element={<ProductPage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </CartContextProvider>
    </BrowserRouter>
  );
}

export default App;
