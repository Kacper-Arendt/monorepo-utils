import { Control } from "react-hook-form";
import { ComponentProps } from "react";

export interface InputInterface {
  control: Control<any> | undefined;
  disabled?: boolean;
  label?: string;
  name: string;
  placeholder?: string;
  type: ComponentProps<"input">["type"];
  size: "small" | "medium" | "large";
}
