import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../context/CartContextProvider/CartContextProvider";
import CartCard from "../../components/CartCard/CartCard";
import styles from "./CartPage.module.scss";

function CartPage() {
  const { productsInCart, setProductsInCart } = useContext(CartContext);
  const [subtotal, setSubtotal] = useState(0);
  const [total, setTotal] = useState(0);

  const calculateTotalPrice = () => {
    //Add price of all the products in cart
    const productsPrice = productsInCart
      .map((product) => product.price)
      .reduce((initial, next) => (initial = initial * 1 + next * 1));
    setSubtotal(productsPrice);

    //Calculate total price after adding delivery fee
    const totalPrice = productsPrice + 8;
    setTotal(totalPrice);
  };

  useEffect(() => {
    console.log("products in cart on cart page ", productsInCart);

    if (productsInCart.length > 0) {
      calculateTotalPrice();
    }
  }, [productsInCart]);
  return (
    <>
      {productsInCart.length > 0 && (
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
            <button>Checkout</button>
          </div>
        </div>
      )}
      {productsInCart.length === 0 && <h2>Cart is empty</h2>}
    </>
  );
}

export default CartPage;
