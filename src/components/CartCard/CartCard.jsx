/* eslint-disable react/prop-types */
import { useContext } from "react";
import styles from "./CartCard.module.scss";
import { CartContext } from "../../context/CartContextProvider/CartContextProvider";

function CartCard({ product }) {
  const { productsInCart, setProductsInCart } = useContext(CartContext);

  const icon = "fa-solid fa-trash " + styles.icon;
  //console.log("Receieved in Cart card", product);
  const onDeleteClick = (e) => {
    const productsAfterDelete = productsInCart.filter(
      (product) => product.id != e.target.id
    );
    setProductsInCart(productsAfterDelete);
  };
  return (
    <>
      {product && (
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
            <i className={icon} onClick={onDeleteClick} id={product.id}></i>
          </div>
        </div>
      )}
    </>
  );
}

export default CartCard;
