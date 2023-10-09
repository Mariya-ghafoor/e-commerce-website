/* eslint-disable react/prop-types */
import { useContext } from "react";
import styles from "./CartCard.module.scss";
import { CartContext } from "../../context/CartContextProvider/CartContextProvider";

function CartCard({ product }) {
  const { productsInCart, setProductsInCart } = useContext(CartContext);

  const icon = "fa-solid fa-trash " + styles.icon;
  const onDeleteClick = () => {
    console.log("products in Cart before deleting ", productsInCart);

    const productsAfterDelete = productsInCart.filter((item) => {
      if (
        item.id === product.id &&
        item.color === product.color &&
        item.size === product.size
      )
        return false;
      else return true;
    });

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
