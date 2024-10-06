import { forwardRef, Ref, SVGProps } from "react";

const ArrowDropUp = (
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
    <path fill="currentColor" d="m10 7.73-4.647 4.647h9.295L10 7.729Z" />
  </svg>
);

const ForwardRef = forwardRef(ArrowDropUp);
export default ForwardRef;
