/* eslint-disable react/prop-types */
import styles from "./ProductCard.module.scss";

function ProductCard({ product, onCardClick }) {
  return (
    <div className={styles.product__card__container}>
      <img
        className={styles.product__card__image}
        id={product.id}
        onClick={onCardClick}
        src={product.imageUrl}
        alt={product.name}
      />
      <div>
        <p>{product.name}</p>
        <p>${product.price}</p>
      </div>
    </div>
  );
}

export default ProductCard;
