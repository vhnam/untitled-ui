import { Icon, IconName } from "@repo/icons";
import { Button, type ButtonProps } from "../Button";

import { cn } from "../../utils/cn";

export interface IconButtonProps
  extends Pick<ButtonProps, "disabled" | "htmlType" | "size"> {
  iconName: IconName;
  variant?: "default" | "negative";
}

const IconButton = ({
  iconName,
  variant = "default",
  ...props
}: IconButtonProps) => {
  return (
    <Button type="secondary" variant={variant} {...props}>
      <Icon name={iconName} />
    </Button>
  );
};

export default IconButton;
