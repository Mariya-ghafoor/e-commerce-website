import { getAllProducts, getProductById } from "../../services/productsService";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ProductCard from "../../components/ProductCard/ProductCard";
import styles from "./ProductsPage.module.scss";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";

function ProductsPage() {
  console.log("im in featured products");
  const [products, setProducts] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [product, setProduct] = useState(null);

  const getProducts = () => {
    console.log("i m getting all products");
    getAllProducts()
      .then((products) => setProducts(products))
      .then(() => setIsLoading(false))
      .catch((e) => console.log(e.message));
  };

  useEffect(() => {
    console.log("in useEffect");
    setIsLoading(true);
    getProducts();
  }, []);

  const navigator = useNavigate();

  const onCardClick = (e) => {
    const productId = e.target.id;
    navigator("/products/" + productId);
  };

  return (
    <div className={styles.products__container}>
      {isLoading && <LoadingSpinner />}
      {products &&
        products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onCardClick={onCardClick}
          />
        ))}
    </div>
  );
}

export default ProductsPage;
