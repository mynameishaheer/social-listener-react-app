import styles from "./MainButton.module.css";

interface Props {
  fullWidth?: boolean;
  variant?: "contained" | "outlined" | "text";
  type?: "submit" | "button" | "reset";
  onClick?: () => void;
  children: string;
}

const MainButton = ({
  type = "button",
  children,
  onClick = () => {},
}: Props) => {
  return (
    <button className={styles.button} type={type} onClick={onClick}>
      {children}
    </button>
  );
};

export default MainButton;
