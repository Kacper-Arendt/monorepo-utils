"use client";

import { ReactNode } from "react";
import clsx from "clsx";

// COMPONENTS
import { ErrorMessage, ErrorMessageInterface } from "../errorMessage";

// STYLES
import s from "./styles.module.css";

export interface LabelInterface extends ErrorMessageInterface {
  label?: string;
  id?: string;
  children: ReactNode;
}

export const Label = ({ id, label, children, error }: LabelInterface) => (
  <label htmlFor={id} className={clsx(s.label)}>
    {label && <span>{label}</span>}
    {children}
    {error && <ErrorMessage error={error} />}
  </label>
);
