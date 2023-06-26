import { ThreeDots } from "react-loader-spinner";
import styles from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={styles.loadingContainer}>
      <ThreeDots color="#BDE460" />
    </div>
  );
};

export default Loader;
