import { forwardRef, Ref, SVGProps } from 'react';

const ArrowForward = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    ref={ref}
    {...props}
  >
    <path
      fill="currentColor"
      d="M12.477 11.02H3.6V8.98h8.877L8.55 5.05 10 3.6l6.4 6.4-6.4 6.4-1.451-1.45 3.928-3.93Z"
    />
  </svg>
);

const ForwardRef = forwardRef(ArrowForward);
export default ForwardRef;
