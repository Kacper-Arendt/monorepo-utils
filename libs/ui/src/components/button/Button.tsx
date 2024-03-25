import { HTMLAttributes } from "react";
import { cw } from "@karendt/utils";

// STYLES
import "../../style.css";

type IntentType = "primary" | "error" | "secondary";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonInterface extends HTMLAttributes<HTMLButtonElement> {
  intent?: IntentType;
  size?: ButtonSize;
  loading?: boolean;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-2 py-2",
  md: "px-4 py-2 text-sm",
  lg: "px-5 py-3 text-base",
};

const intentStyles: Record<IntentType, string> = {
  primary: "bg-primary text-white hover:bg-primary-dark",
  secondary: "bg-secondary text-white hover:bg-secondary-dark",
  error: "bg-red-600 text-white hover:bg-red-700",
};

export const Button = ({
  children,
  size = "md",
  type = "button",
  className,
  disabled,
  loading,
  onClick,
  intent,
}: ButtonInterface) => (
  <button
    // eslint-disable-next-line react/button-has-type
    type={type}
    className={cw(
      "h-fit w-fit rounded text-xs font-medium transition-all border border-transparent",
      "disabled:cursor-not-allowed disabled:bg-neutral-500 ",
      sizeStyles[size],
      intent && intentStyles[intent],
      className,
    )}
    disabled={disabled}
    onClick={onClick}
  >
    {children}
    {/* todo add loader */}
    {loading && "..."}
  </button>
);
