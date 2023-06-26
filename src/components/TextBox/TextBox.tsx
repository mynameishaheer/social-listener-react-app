import { useState } from "react";
import { TextField } from "@mui/material";
import styles from "./TextBox.module.css";
import { MdEmail, MdRemoveRedEye } from "react-icons/md";
import { IoEyeOffSharp } from "react-icons/io5";
import { BiRename } from "react-icons/bi";

interface Props {
  fullWidth?: boolean;
  name: string;
  label: string;
  required?: boolean;
  autoFocus?: boolean;
  onChange?: (e: any) => void;
  type?: string;
  autocomplete?: string;
  error?: boolean;
  helperText?: string;
}

const TextBox = ({
  fullWidth = true,
  name,
  label,
  required = false,
  autoFocus = false,
  onChange,
  type = "text",
  autocomplete = "off",
  error = false,
  helperText = "",
}: Props) => {
  const [hidden, setHidden] = useState(true);

  const toggleHide = () => {
    setHidden(!hidden);
  };

  return (
    <div className={styles.textfieldBackground}>
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
          autoComplete={autocomplete}
          error={error}
          helperText={helperText}
          InputProps={{
            style: {
              border: "none",
              boxShadow: "none",
              color: "white",
            },
            classes: {
              root: `${styles.root}`,
              notchedOutline: `${styles.removeBorder}`,
              focused: `${styles.removeBorder}`,
            },
          }}
          InputLabelProps={{
            style: { color: "white" },
          }}
          FormHelperTextProps={{
            style: { color: "#E46060" },
          }}
        />
        {name === "email" ? (
          <MdEmail className={styles.icon} size={"22px"} />
        ) : name === "password" ? (
          hidden ? (
            <div onClick={toggleHide} style={{ height: "22px !important" }}>
              <IoEyeOffSharp className={styles.icon} size={"22px"} />
            </div>
          ) : (
            <div onClick={toggleHide}>
              <MdRemoveRedEye className={styles.icon} size={"22px"} />
            </div>
          )
        ) : name === "firstname" || name == "lastname" ? (
          <BiRename className={styles.icon} size={"22px"} />
        ) : null}
      </div>
    </div>
  );
};

export default TextBox;
