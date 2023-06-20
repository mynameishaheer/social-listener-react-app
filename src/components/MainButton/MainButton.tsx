import styles from "./MainButton.module.css";

interface Props {
  fullWidth?: boolean;
  variant?: "contained" | "outlined" | "text";
  type?: "submit" | "button" | "reset";
  children: string;
}

const MainButton = ({ type = "button", children }: Props) => {
  return (
    <button className={styles.button} type={type}>
      {children}
    </button>
  );
};

export default MainButton;
