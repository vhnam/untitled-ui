import { PropsWithChildren } from "react";

import { cn } from "../../utils/cn";

export interface TypographyProps extends PropsWithChildren {
  variant: "display" | "h1" | "h2" | "h3" | "paragraph" | "label";
  weight: "light" | "regular" | "medium" | "semiBold";
}

const Typography = ({ children, variant, weight }: TypographyProps) => {
  return (
    <div
      className={cn(variant, {
        ["font-light"]: weight === "light",
        ["font-regular"]: weight === "regular",
        ["font-medium"]: weight === "medium",
        ["font-semiBold"]: weight === "semiBold",
      })}
    >
      {children}
    </div>
  );
};

export default Typography;
