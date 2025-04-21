import {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  PropsWithChildren,
} from "react";

import "./Button.css";

interface ButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  action?: () => void;
  modifier?: string;
}

const Button: React.FC<PropsWithChildren<ButtonProps>> = ({
  children,
  action,
  modifier,
  ...otherProps
}) => {
  const classModifier = modifier ? ` button--${modifier}` : "";

  return (
    <button
      className={`button${classModifier}`}
      onClick={action}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;
