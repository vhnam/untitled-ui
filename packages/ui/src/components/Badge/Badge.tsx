import { cn } from "@repo/ui";
import { PropsWithChildren } from "react";

export interface BadgeProps extends PropsWithChildren {
  badgeContent?: string;
}

const Badge = ({ badgeContent, children }: BadgeProps) => {
  return (
    <div className={cn("care-badge")}>
      <div className={cn("care-badge__content")}>{badgeContent}</div>
      <div>{children}</div>
    </div>
  );
};

export default Badge;
