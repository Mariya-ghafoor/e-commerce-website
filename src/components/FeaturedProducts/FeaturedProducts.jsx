import styles from "./FeaturedProducts.module.scss";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { getFeaturedProducts } from "../../services/productsService";
import { useEffect, useState } from "react";
import ShowCarousel from "../showCarousel/showCarousel";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

function FeaturedProducts() {
  console.log("im in featured products");
  const [featuredProducts, setFeaturedProducts] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const getProducts = () => {
    console.log("i m getting products");
    getFeaturedProducts()
      .then((products) => setFeaturedProducts(products))
      .then(() => setIsLoading(false))
      .catch((e) => console.log(e.message));
  };

  useEffect(() => {
    console.log("in useEffect");
    setIsLoading(true);
    getProducts();
  }, []);

  return (
    <div className={styles.featured__container}>
      <div className={styles.featured__heading}>
        <h3>Buy the Best sellers</h3>
      </div>
      {isLoading && <LoadingSpinner />}
      <div className={styles.featured__carousel}>
        {featuredProducts && <ShowCarousel products={featuredProducts} />}
      </div>
    </div>
  );
}

export default FeaturedProducts;
