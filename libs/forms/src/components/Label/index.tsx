import { LabelHTMLAttributes } from "react";
import styles from "./styles.module.css";

export const Label = (props: LabelHTMLAttributes<HTMLLabelElement>) => {
  const { className, ...restProps } = props;
  // eslint-disable-next-line jsx-a11y/label-has-associated-control
  return <label className={`${className} ${styles.label}`} {...restProps} />;
};
