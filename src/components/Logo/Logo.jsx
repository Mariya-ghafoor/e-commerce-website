import styles from "./Logo.module.scss";
import logoShoe from "./logo-shoe.png";
function Logo() {
  return (
    <div className={styles.container}>
      <h1 className={styles.logo__nike}>Nike</h1>

      <img src={logoShoe} alt="nike shoes" className={styles.logo__shoe} />
    </div>
  );
}

export default Logo;
