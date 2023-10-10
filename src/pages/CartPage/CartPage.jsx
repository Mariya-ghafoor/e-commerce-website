import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../context/CartContextProvider/CartContextProvider";
import CartCard from "../../components/CartCard/CartCard";
import styles from "./CartPage.module.scss";

function CartPage() {
  const { productsInCart, setProductsInCart } = useContext(CartContext);

  const [subtotal, setSubtotal] = useState(0);
  const [total, setTotal] = useState(0);
  const [checkoutMessage, setCheckoutMessage] = useState(null);

  const calculateTotalPrice = () => {
    //Add price of all the products in cart
    try {
      const productsPrice = productsInCart
        .map((product) => product.price)
        .reduce((initial, next) => (initial = initial * 1 + next * 1));
      setSubtotal(productsPrice);

      //Calculate total price after adding delivery fee
      const totalPrice = productsPrice + 8;
      setTotal(totalPrice);
    } catch {}
  };

  const onCheckoutClick = () => {
    localStorage.clear();
    setProductsInCart(null);
    setCheckoutMessage("thank you for shopping with us.");
  };

  useEffect(() => {
    if (productsInCart && productsInCart.length > 0) {
      localStorage.setItem("products", JSON.stringify(productsInCart));
      calculateTotalPrice();
    }
  }, [productsInCart]);

  return (
    <>
      {productsInCart && productsInCart.length > 0 && (
        <div className={styles.page__container}>
          <div className={styles.cards__container}>
            {productsInCart &&
              productsInCart.map((product, index) => (
                <CartCard key={index} product={product} />
              ))}
          </div>

          <div className={styles.order__summary}>
            <h3>Order Summary</h3>
            <p>Subtotal: ${subtotal} </p>
            <p>Delivery fee: $8 </p>
            <p>Total: ${total}</p>
            <button onClick={onCheckoutClick}>Checkout</button>
          </div>
        </div>
      )}
      {productsInCart === null ||
        (productsInCart &&
          productsInCart.length == 0 &&
          checkoutMessage === null && <h2>Cart is empty</h2>)}
      {checkoutMessage && <h2>Thank you for shopping with us.</h2>}
    </>
  );
}

export default CartPage;
