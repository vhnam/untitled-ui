import { forwardRef, Ref, SVGProps } from 'react';

const ArrowBack = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    ref={ref}
    {...props}
  >
    <path
      fill="currentColor"
      d="m7.523 11.02 3.928 3.93L10 16.4 3.6 10 10 3.6l1.451 1.45-3.928 3.93H16.4v2.04H7.523Z"
    />
  </svg>
);

const ForwardRef = forwardRef(ArrowBack);
export default ForwardRef;
