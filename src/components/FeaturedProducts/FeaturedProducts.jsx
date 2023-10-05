import styles from "./FeaturedProducts.module.scss";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { getFeaturedProducts } from "../../services/productsService";
import { useEffect, useState } from "react";
import ShowCarousel from "../showCarousel/showCarousel";

function FeaturedProducts() {
  console.log("im in featured products");
  const [featuredProducts, setFeaturedProducts] = useState(null);

  const getProducts = () => {
    console.log("i m getting products");
    getFeaturedProducts()
      .then((products) => setFeaturedProducts(products))
      .catch((e) => console.log(e.message));
  };

  useEffect(() => {
    console.log("in useEffect");
    getProducts();
  }, []);

  return (
    <div className={styles.featured__container}>
      <div className={styles.featured__heading}>
        <h3>Buy the Best sellers</h3>
      </div>
      <div className={styles.featured__carousel}>
        {featuredProducts && <ShowCarousel products={featuredProducts} />}
      </div>
    </div>
  );
}

export default FeaturedProducts;
