import { Icon, IconName } from "@repo/icons";
import { PropsWithChildren } from "react";

import { cn } from "../../utils/cn";

export interface BadgeProps extends PropsWithChildren {
  contrast?: "low" | "high";
  icon?: IconName;
  size?: "large" | "small";
  variant?: "neutral" | "negative" | "attention" | "positive" | "informative";
}

const Badge = ({
  children,
  contrast = "low",
  icon,
  size = "large",
  variant = "neutral",
}: BadgeProps) => {
  return (
    <div
      className={cn("badge", {
        ["badge__low badge--neutral"]:
          contrast === "low" && variant === "neutral",
        ["badge__low badge--negative"]:
          contrast === "low" && variant === "negative",
        ["badge__low badge--attention"]:
          contrast === "low" && variant === "attention",
        ["badge__low badge--positive"]:
          contrast === "low" && variant === "positive",
        ["badge__low badge--informative"]:
          contrast === "low" && variant === "informative",
        ["badge__high badge--neutral"]:
          contrast === "high" && variant === "neutral",
        ["badge__high badge--negative"]:
          contrast === "high" && variant === "negative",
        ["badge__high badge--attention"]:
          contrast === "high" && variant === "attention",
        ["badge__high badge--positive"]:
          contrast === "high" && variant === "positive",
        ["badge__high badge--informative"]:
          contrast === "high" && variant === "informative",
        ["badge--small"]: size === "small",
      })}
    >
      {icon && (
        <Icon
          name={icon}
          width={size === "small" ? 12 : 20}
          height={size === "small" ? 12 : 20}
        />
      )}
      {children}
    </div>
  );
};

export default Badge;
