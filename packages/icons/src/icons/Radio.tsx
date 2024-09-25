import { forwardRef, Ref, SVGProps } from "react";

const Radio = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    ref={ref}
    {...props}
  >
    <mask
      id="a"
      width={20}
      height={20}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: "alpha",
      }}
    >
      <path fill="currentColor" d="M0 0h20v20H0z" />
    </mask>
    <g mask="url(#a)">
      <path
        fill="currentColor"
        d="M10.005 14c1.108 0 2.05-.39 2.828-1.171S14 11.102 14 9.995s-.39-2.05-1.171-2.828S11.103 6 9.995 6s-2.05.39-2.828 1.171S6 8.897 6 10.005s.39 2.05 1.171 2.828S8.897 14 10.005 14Zm0 4.4a8.224 8.224 0 0 1-3.274-.655 8.45 8.45 0 0 1-2.675-1.802 8.454 8.454 0 0 1-1.801-2.673A8.23 8.23 0 0 1 1.6 9.99c0-1.167.218-2.257.655-3.27A8.455 8.455 0 0 1 6.73 2.255a8.23 8.23 0 0 1 3.28-.654c1.167 0 2.257.218 3.27.655a8.469 8.469 0 0 1 4.466 4.47 8.18 8.18 0 0 1 .654 3.27 8.223 8.223 0 0 1-.655 3.274 8.452 8.452 0 0 1-1.801 2.675 8.468 8.468 0 0 1-2.67 1.801 8.181 8.181 0 0 1-3.268.655ZM10 16.36c1.774 0 3.277-.617 4.51-1.849 1.232-1.232 1.849-2.736 1.849-4.51 0-1.774-.617-3.277-1.849-4.51-1.232-1.232-2.736-1.849-4.51-1.849-1.774 0-3.277.617-4.51 1.849C4.258 6.722 3.641 8.226 3.641 10c0 1.774.617 3.277 1.849 4.51 1.233 1.232 2.736 1.849 4.51 1.849Z"
      />
    </g>
  </svg>
);

const ForwardRef = forwardRef(Radio);
export default ForwardRef;