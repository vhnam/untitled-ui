import { Icon, IconName } from "@repo/icons";
import { PropsWithChildren } from "react";

import { cn } from "../../utils/cn";

export interface ChipsProps extends PropsWithChildren {
  contrast?: "low" | "high";
  leadingIcon?: IconName;
  state?: "active" | "inactive";
  trailingIcon?: IconName;
}

const Chips = ({
  children,
  leadingIcon,
  trailingIcon,
  state = "inactive",
}: ChipsProps) => {
  return (
    <div
      className={cn("care-chips", {
        ["care-chips--active"]: state === "active",
      })}
    >
      {leadingIcon && <Icon name={leadingIcon} />}
      {children}
      {trailingIcon && <Icon name={trailingIcon} />}
    </div>
  );
};

export default Chips;
