import styles from "./button.module.scss";

import { ReactNode } from "react";

type ButtonProps = {
  icon?: ReactNode;
  size?: "small" | "medium" | "large";
  href: string;
  title: string;
  style?: any;
  color?: "white" | "pink";
};

export default function Button({
  icon,
  size = "medium",
  href,
  title,
  style,
  color = "pink",
}: ButtonProps) {
  const buttonClasses = `
    ${styles.button}
    ${styles[`button--${size}`]}
    ${styles[`button--${color}`]}
  `;

  return (
    <a href={href} className={buttonClasses} style={style}>
      {icon && <span className={styles.button__icon}>{icon}</span>}
      {title}
    </a>
  );
}
