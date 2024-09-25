import { forwardRef, Ref, SVGProps } from "react";

const SwitchOn = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    ref={ref}
    {...props}
  >
    <rect width={16} height={16} x={4} y={4} fill="#fff" rx={8} />
    <path
      fill="currentColor"
      d="M10.863 14.889 8.21 12.25l.871-.883 1.78 1.78 4.056-4.043.87.871-4.925 4.914Z"
    />
  </svg>
);

const ForwardRef = forwardRef(SwitchOn);
export default ForwardRef;
