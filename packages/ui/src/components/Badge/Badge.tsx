import { cn } from "@repo/ui";
import { PropsWithChildren } from "react";

export interface BadgeProps extends PropsWithChildren {
  badgeContent?: string;
}

const Badge = ({ badgeContent, children }: BadgeProps) => {
  return (
    <div className={cn("badge")}>
      <div className={cn("badge__content")}>{badgeContent}</div>
      <div>{children}</div>
    </div>
  );
};

export default Badge;
