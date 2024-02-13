import { FieldError } from "react-hook-form";
import s from "./styles.module.css";

export const ErrorMessage = ({ error }: { error: FieldError | undefined }) => (
  <span className={s.error}>{error?.message}</span>
);
