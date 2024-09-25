import { forwardRef, Ref, SVGProps } from "react";

const ArrowDropDown = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    ref={ref}
    {...props}
  >
    <path fill="currentColor" d="M10 12.377 5.353 7.73h9.295L10 12.377Z" />
  </svg>
);

const ForwardRef = forwardRef(ArrowDropDown);
export default ForwardRef;
