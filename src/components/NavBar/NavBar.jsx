import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.scss";

function NavBar() {
  const linkStyles = ({ isActive }) => {
    return isActive ? `${styles.link} ${styles.active_link}` : styles.link;
  };

  return (
    <nav className={styles.navbar}>
      <NavLink className={linkStyles} to="/">
        Home
      </NavLink>
      <NavLink className={linkStyles} to="/products">
        Products
      </NavLink>
      <NavLink className={linkStyles} to="/contact">
        Contact
      </NavLink>
      <NavLink className={linkStyles} to="/cart">
        Cart
      </NavLink>
    </nav>
  );
}

export default NavBar;
