import styles from "./LoadingSpinner.module.scss";
import { Audio, ColorRing, InfinitySpin } from "react-loader-spinner";
function LoadingSpinner() {
  return (
    <div className={styles.loader__container}>
      <InfinitySpin />
    </div>
  );
}

export default LoadingSpinner;
