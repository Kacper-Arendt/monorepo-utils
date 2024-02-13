import { ReactNode } from "react";
import clsx from "clsx";

// STYLES
import s from "./styles.module.css";

interface ButtonInterface {
  variant?: "outlined" | "contained" | "text";
  size?: "small" | "medium" | "large";
  loading?: boolean;
  children: ReactNode;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  className?: string;
  onClick?: () => void;
}

export const Button = ({
  children,
  variant = "contained",
  size = "medium",
  type = "button",
  className,
  disabled,
  loading,
  onClick,
}: ButtonInterface) => (
  <button
    // eslint-disable-next-line react/button-has-type
    type={type}
    className={clsx(s.button, s[variant], s[size], className)}
    disabled={disabled}
    onClick={onClick}
  >
    {children}
    {/* todo add loader */}
    {loading && "..."}
  </button>
);
