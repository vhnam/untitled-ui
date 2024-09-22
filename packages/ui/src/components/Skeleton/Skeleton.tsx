import { cn } from "@repo/ui";
import { useMemo } from "react";

export type SkeletonSizeForText = 20 | 16 | 14 | 11;

export type SkeletonSizeForAvatar = "xlarge" | "large" | "medium" | "small";

export interface SkeletonProps {
  size: SkeletonSizeForText | SkeletonSizeForAvatar;
  variant: "text" | "circle" | "square" | "rectangle";
}

const Skeleton = ({ size, variant }: SkeletonProps) => {
  const skeletonVariantClassName = useMemo(() => {
    switch (variant) {
      case "text":
        return `skeleton__text skeleton__text--${size as SkeletonSizeForText}`;
      case "circle":
        return `skeleton__circle skeleton__circle--${size as SkeletonSizeForAvatar}`;
      case "square":
        return `skeleton__square skeleton__square--${size as SkeletonSizeForAvatar}`;
      case "rectangle":
        return `skeleton__rectangle skeleton__rectangle--${size as SkeletonSizeForAvatar}`;
      default:
        return "";
    }
  }, [size, variant]);

  return <div className={cn("skeleton", skeletonVariantClassName)} />;
};

export default Skeleton;
