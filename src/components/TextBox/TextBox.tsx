import { useState } from "react";
import { TextField } from "@mui/material";
import styles from "./TextBox.module.css";
import { MdEmail, MdRemoveRedEye } from "react-icons/md";
import { IoEyeOffSharp } from "react-icons/io5";

interface Props {
  fullWidth?: boolean;
  name: string;
  label: string;
  required?: boolean;
  autoFocus?: boolean;
  onChange?: (e: any) => void;
  type?: string;
}

const TextBox = ({
  fullWidth = true,
  name,
  label,
  required = false,
  autoFocus = false,
  onChange,
  type = "text",
}: Props) => {
  const [hidden, setHidden] = useState(true);

  const toggleHide = () => {
    setHidden(!hidden);
  };

  return (
    <div className={styles.textfieldContainer}>
      <TextField
        autoFocus={autoFocus}
        fullWidth={fullWidth}
        id={name}
        label={label}
        name={name}
        required={required}
        onChange={onChange}
        type={hidden ? type : "text"}
        InputProps={{
          style: { border: "none", boxShadow: "none", color: "white" },
          classes: {
            root: `${styles.root}`,
            notchedOutline: `${styles.removeBorder}`,
          },
        }}
        InputLabelProps={{
          style: { color: "white" },
        }}
      />
      {name === "email" ? (
        <MdEmail className={styles.icon} size={"22px"} />
      ) : name === "password" ? (
        hidden ? (
          <div onClick={toggleHide}>
            <IoEyeOffSharp className={styles.icon} size={"22px"} />
          </div>
        ) : (
          <div onClick={toggleHide}>
            <MdRemoveRedEye className={styles.icon} size={"22px"} />
          </div>
        )
      ) : null}
    </div>
  );
};

export default TextBox;
