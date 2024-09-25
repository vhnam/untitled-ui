import { cn } from "../../utils/cn";

export interface DividerProps {
  width?: "full" | "inset";
}

const Divider = ({ width = "full" }: DividerProps) => {
  return (
    <div
      className={cn("care-divider", {
        ["care-divider--inset"]: width === "inset",
      })}
    >
      <div className="care-divider__line" />
    </div>
  );
};

export default Divider;
