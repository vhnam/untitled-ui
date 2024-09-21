import { PropsWithChildren, ReactNode } from "react";

import { cn } from "../../utils/cn";

export interface ButtonProps extends PropsWithChildren {
  disabled?: boolean;
  htmlType?: "button" | "submit" | "reset";
  leadingIcon?: ReactNode;
  size?: "default" | "small";
  trailingIcon?: ReactNode;
  type?: "primary" | "secondary" | "tertiary";
  variant?: "default" | "positive" | "negative";
}

const Button = ({
  children,
  disabled = false,
  htmlType = "button",
  leadingIcon,
  size = "default",
  trailingIcon,
  type = "primary",
  variant = "default",
}: ButtonProps) => {
  return (
    <button
      className={cn("btn", {
        ["btn__default btn--primary"]:
          variant === "default" && type === "primary",
        ["btn__default btn--secondary"]:
          variant === "default" && type === "secondary",
        ["btn__default btn--tertiary"]:
          variant === "default" && type === "tertiary",
        ["btn__positive btn--primary"]:
          variant === "positive" && type === "primary",
        ["btn__positive btn--secondary"]:
          variant === "positive" && type === "secondary",
        ["btn__positive btn--tertiary"]:
          variant === "positive" && type === "tertiary",
        ["btn__negative btn--primary"]:
          variant === "negative" && type === "primary",
        ["btn__negative btn--secondary"]:
          variant === "negative" && type === "secondary",
        ["btn__negative btn--tertiary"]:
          variant === "negative" && type === "tertiary",
        ["btn--small"]: size === "small",
      })}
      disabled={disabled}
      type={htmlType}
    >
      {leadingIcon}
      {children}
      {trailingIcon}
    </button>
  );
};

export default Button;
