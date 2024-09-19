import { PropsWithChildren } from "react";
import tokens from "@repo/design-tokens";

import { cn } from "../../utils/cn";

export interface TypographyProps extends PropsWithChildren {
  variant: "display" | "h1" | "h2" | "h3" | "paragraph" | "label";
  weight: keyof typeof tokens.display | "regular" | "medium" | "semiBold";
}

const Typography = ({ children, variant, weight }: TypographyProps) => {
  return (
    <div
      className={cn(`font-${weight}`, {
        ["text-30 tracking-xdense leading-36"]: variant === "display",
        ["text-20 tracking-xdense leading-24"]: variant === "h1",
        ["text-16 tracking-dense leading-20"]: variant === "h2",
        ["text-14 tracking-normal leading-16"]:
          variant === "h3" || variant === "paragraph",
        ["text-11 tracking-normal leading-12"]: variant === "label",
      })}
    >
      {children}
    </div>
  );
};

export default Typography;
