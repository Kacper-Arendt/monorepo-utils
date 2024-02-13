import { ReactNode } from "react";
import clsx from "clsx";

// STYLES
import s from "./styles.module.scss";

interface ButtonInterface {
  variant?: "outlined" | "contained" | "text";
  size?: "sm" | "md" | "lg";
  loading?: boolean;
  children: ReactNode;
  type: "button" | "submit" | "reset";
  disabled?: boolean;
  className?: string;
}

export const Button = ({
  children,
  variant = "outlined",
  size = "md",
  type = "button",
  className,
  disabled,
  loading,
}: ButtonInterface) => (
  <button
    // eslint-disable-next-line react/button-has-type
    type={type}
    className={clsx(s.button, { variant, size }, className)}
    disabled={disabled}
  >
    {children}
    {/* todo add loader */}
    {loading && "..."}
  </button>
);
