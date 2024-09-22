import { Icon, IconName } from "@repo/icons";
import { PropsWithChildren } from "react";

import { cn } from "../../utils/cn";

export interface TagProps extends PropsWithChildren {
  contrast?: "low" | "high";
  icon?: IconName;
  size?: "large" | "small";
  variant?: "neutral" | "negative" | "attention" | "positive" | "informative";
}

const Tag = ({
  children,
  contrast = "low",
  icon,
  size = "large",
  variant = "neutral",
}: TagProps) => {
  return (
    <div
      className={cn("tag", {
        ["tag__low tag--neutral"]: contrast === "low" && variant === "neutral",
        ["tag__low tag--negative"]:
          contrast === "low" && variant === "negative",
        ["tag__low tag--attention"]:
          contrast === "low" && variant === "attention",
        ["tag__low tag--positive"]:
          contrast === "low" && variant === "positive",
        ["tag__low tag--informative"]:
          contrast === "low" && variant === "informative",
        ["tag__high tag--neutral"]:
          contrast === "high" && variant === "neutral",
        ["tag__high tag--negative"]:
          contrast === "high" && variant === "negative",
        ["tag__high tag--attention"]:
          contrast === "high" && variant === "attention",
        ["tag__high tag--positive"]:
          contrast === "high" && variant === "positive",
        ["tag__high tag--informative"]:
          contrast === "high" && variant === "informative",
        ["tag--small"]: size === "small",
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

export default Tag;
