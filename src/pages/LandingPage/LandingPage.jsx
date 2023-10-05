import FeaturedProducts from "../../components/FeaturedProducts/FeaturedProducts.jsx";
import Logo from "../../components/Logo/Logo.jsx";
import styles from "./LandingPage.module.scss";

function LandingPage() {
  return (
    <>
      <Logo />
      <div className={styles.container}>
        <FeaturedProducts />
      </div>
    </>
  );
}

export default LandingPage;
