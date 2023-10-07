/* eslint-disable react/prop-types */
import React from "react";
import styles from "./CartCard.module.scss";

function CartCard({ product }) {
  console.log("in cart card");
  console.log(product.name);
  console.log(product.color);
  console.log(product.size);
  return (
    <div className={styles.container__card}>
      <img
        className={styles.container__card__image}
        src={product.imageUrl}
        alt={product.name}
      />

      <div className={styles.container__card__details}>
        <p>{product.name}</p>
        <p>Color: {product.color}</p>
        <p>Size: US{product.size}</p>
        <p>Price: ${product.price}</p>
        <i className="fa-solid fa-trash"></i>
      </div>
    </div>
  );
}

export default CartCard;
