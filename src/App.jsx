import { getProductById } from "./services/productsService";
import "./App.css";
import LandingPage from "./pages/LandingPage/LandingPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import ProductPage from "./pages/ProductPage/ProductPage";

function App() {
  //queryDatabase("Air Jordan", "black", "3.5");

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/products/:id" element={<ProductPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
