import { forwardRef, Ref, SVGProps } from 'react';

const Close = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    ref={ref}
    {...props}
  >
    <path
      fill="currentColor"
      d="m6.062 15.377-1.439-1.44L8.561 10 4.623 6.062l1.44-1.439L10 8.561l3.937-3.938 1.44 1.44L11.439 10l3.938 3.937-1.44 1.44L10 11.439l-3.938 3.938Z"
    />
  </svg>
);

const ForwardRef = forwardRef(Close);
export default ForwardRef;
