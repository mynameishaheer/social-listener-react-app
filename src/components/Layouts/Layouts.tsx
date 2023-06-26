import { ReactNode } from "react";
import styles from "./Layouts.module.css";

interface RowProps {
  children?: ReactNode;
  justifyContent?: string;
  alignItems?: string;
  gap?: string;
}
interface ColumnProps {
  children?: ReactNode;
  justifyContent?: string;
  alignItems?: string;
}

const Row = ({
  children = "",
  justifyContent = "center",
  alignItems = "center",
  gap = "0px",
}: RowProps) => {
  return (
    <div
      className={styles.row}
      style={{
        justifyContent: `${justifyContent}`,
        alignItems: `${alignItems}`,
        width: `${"100%"}`,
        gap: `${gap}`,
      }}
    >
      {children}
    </div>
  );
};

const Column = ({
  children = "",
  justifyContent = "center",
  alignItems = "center",
}: ColumnProps) => {
  return (
    <div
      className={styles.column}
      style={{
        justifyContent: `${justifyContent}`,
        alignItems: `${alignItems}`,
      }}
    >
      {children}
    </div>
  );
};

export { Row, Column };
