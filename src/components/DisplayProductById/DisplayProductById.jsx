/* eslint-disable react/prop-types */
import styles from "./DisplayProductById.module.scss";
import { checkIfAvailable } from "../../services/productsService";
import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContextProvider/CartContextProvider";

function DisplayProductById({ product }) {
  const [selectedColor, setSelectedColor] = useState("black");
  const [selectedSize, setSelectedSize] = useState("3.5");
  const { productsInCart, setProductsInCart } = useContext(CartContext);
  //const [isAvailable, setIsAvailable] = useState(false);

  const addToCart = async () => {
    const isAvailable = await checkIfAvailable(
      product.name,
      selectedColor,
      selectedSize
    );
    if (isAvailable === true) {
      product.color = selectedColor; //We need to add these properties to the object as they are not originally properties but subcollections.
      product.size = selectedSize;
      setProductsInCart((productsInCart) => [...productsInCart, product]);
      console.log("i have set products in cart ", productsInCart);
    }
  };

  const onChangeColor = (e) => {
    console.log("on change color");
    setSelectedColor(e.target.value);
  };

  const onChangeSize = (e) => {
    console.log("on change size");
    console.log(e.target.value);
    setSelectedSize(e.target.value);
  };
  return (
    <>
      <div className={styles.product__container}>
        <img
          className={styles.product__image}
          src={product.imageUrl}
          alt={product.name}
        />

        <div className={styles.product__details}>
          <h2 className={styles.product__details__heading}>{product.name}</h2>
          <p className={styles.product__details__price}>${product.price}</p>
          <div className={styles.product__details__color}>
            <label htmlFor="color">Color:</label>
            <select name="color" onChange={onChangeColor}>
              <option value="black">Black</option>
              <option value="red">Red</option>
            </select>
          </div>

          <div className={styles.product__details__size}>
            <label htmlFor="size">Size:</label>
            <select name="size" onChange={onChangeSize}>
              <option value="3.5">US 3.5</option>
              <option value="4.5">US 4.5</option>
              <option value="5.5">US 5.5</option>
              <option value="6.5">US 6.5</option>
            </select>
          </div>

          <div className={styles.product__details__button}>
            <button onClick={addToCart}>Add to Cart</button>
          </div>
          <div className={styles.product__details__button}>
            <button>Add to Favourites</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default DisplayProductById;
