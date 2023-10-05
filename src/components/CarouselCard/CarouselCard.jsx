/* eslint-disable react/prop-types */
import styles from "./CarouselCard.module.scss";

function CarouselCard({ id, product }) {
  console.log("i received product in Carousel ", product);
  return (
    <div className={styles.carousel__card__container}>
      <img
        className={styles.carousel__card__image}
        src={product.imageUrl}
        alt=""
      />

      <h4 className={styles.carousel__card__heading}>{product.name}</h4>
    </div>
  );
}

export default CarouselCard;
