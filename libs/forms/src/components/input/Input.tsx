"use client";

import { Controller } from "react-hook-form";
import clsx from "clsx";

// COMPONENTS
import { Label } from "../label";

// TYPES
import { InputInterface } from "./input.types";

// STYLES
import s from "./styles.module.css";

export const Input = ({
  label,
  type,
  placeholder,
  disabled,
  name,
  control,
  size = "medium",
}: InputInterface) => (
  <Controller
    name={name}
    control={control}
    render={({
      field: { value, onChange, onBlur, ref },
      fieldState: { error },
    }) => (
      <Label label={label} error={error}>
        <input
          type={type}
          name={name}
          required
          ref={ref}
          value={value || ""}
          onChange={onChange}
          onBlur={onBlur}
          placeholder={placeholder}
          disabled={disabled}
          className={clsx(s.input, s[size])}
        />
      </Label>
    )}
  />
);
