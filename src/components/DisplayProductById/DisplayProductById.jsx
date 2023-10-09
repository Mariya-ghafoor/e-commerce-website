/* eslint-disable react/prop-types */
import styles from "./DisplayProductById.module.scss";
import { checkIfAvailable } from "../../services/productsService";
import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContextProvider/CartContextProvider";
import { addToFavourites } from "../../services/productsService";

function DisplayProductById({ product }) {
  const [selectedColor, setSelectedColor] = useState("black");
  const [selectedSize, setSelectedSize] = useState("3.5");
  const [isFavourite, setIsFavourite] = useState(false);
  const { productsInCart, setProductsInCart } = useContext(CartContext);

  const iconStyleTransparent = "fa-regular fa-star " + styles.icon;
  const iconStyleFill = "fa-solid fa-star " + styles.icon__fill;

  const addToCart = async () => {
    const isAvailable = await checkIfAvailable(
      product.name,
      selectedColor,
      selectedSize
    );
    if (isAvailable === true) {
      product.color = selectedColor; //We need to add these properties to the object as they are not originally properties but subcollections.
      product.size = selectedSize;

      if (productsInCart !== null)
        setProductsInCart((productsInCart) => [...productsInCart, product]);
      else setProductsInCart([product]);
    }
  };

  const onChangeColor = (e) => {
    console.log("new color ", e.target.value);

    setSelectedColor(e.target.value);
  };

  const onChangeSize = (e) => {
    console.log("on change size");
    console.log(e.target.value);
    setSelectedSize(e.target.value);
  };

  const onFavouriteClick = async () => {
    const isFav = await addToFavourites(product.name);
    if (isFav === true) setIsFavourite(true);
  };
  return (
    <>
      <div className={styles.product__container}>
        <div className={styles.product__image__container}>
          <img
            className={styles.product__image}
            src={product.imageUrl}
            alt={product.name}
          />
          {isFavourite ? (
            <i className={iconStyleFill}></i>
          ) : (
            <i className={iconStyleTransparent}></i>
          )}
        </div>

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
            <button onClick={onFavouriteClick}>Add to Favourites</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default DisplayProductById;
