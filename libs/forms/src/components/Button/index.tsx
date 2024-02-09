import { ButtonHTMLAttributes } from "react";
import styles from "./styles.module.css";

export const Button = ({
  className,
  ...rest
}: ButtonHTMLAttributes<HTMLButtonElement>) => (
  <button
    type="button"
    className={`${className}  ${styles.button}`}
    {...rest}
  />
);
