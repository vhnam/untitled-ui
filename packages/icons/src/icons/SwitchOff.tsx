import { forwardRef, Ref, SVGProps } from "react";

const SwitchOff = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    ref={ref}
    {...props}
  >
    <rect width={12} height={12} x={6} y={6} fill="currentColor" rx={6} />
  </svg>
);

const ForwardRef = forwardRef(SwitchOff);
export default ForwardRef;
