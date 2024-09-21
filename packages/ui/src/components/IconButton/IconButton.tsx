import { Icon, type IconNameType } from "@repo/icons";
import { Button, type ButtonProps } from "../Button";

import { cn } from "../../utils/cn";

export interface IconButtonProps
  extends Pick<ButtonProps, "disabled" | "htmlType" | "size"> {
  iconName: IconNameType;
  variant?: "default" | "negative";
}

const IconButton = ({
  iconName,
  variant = "default",
  ...props
}: IconButtonProps) => {
  return (
    <Button type="secondary" variant={variant} size="small" {...props}>
      <Icon name={iconName} />
    </Button>
  );
};

export default IconButton;
