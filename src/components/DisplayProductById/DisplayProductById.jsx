import styles from "./DisplayProductById.module.scss";

function DisplayProductById({ product }) {
  console.log("displaying product ", product.imageUrl);
  return (
    <div className={styles.product__container}>
      <div>
        <img
          className={styles.product__image}
          src={product.imageUrl}
          alt={product.name}
        />
      </div>
      <div className={styles.product__details}>details</div>
    </div>
  );
}

export default DisplayProductById;
