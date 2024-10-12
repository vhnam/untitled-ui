import { forwardRef, Ref, SVGProps } from 'react';

const Sort = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    ref={ref}
    {...props}
  >
    <path
      fill="currentColor"
      d="M6.544 11.024V5.51L4.627 7.428l-1.44-1.44L7.564 1.6l4.377 4.388-1.44 1.44L8.586 5.51v5.513H6.544ZM12.61 18.4l-4.376-4.388 1.439-1.44 1.917 1.917V8.976h2.041v5.513l1.917-1.917 1.44 1.44L12.61 18.4Z"
    />
  </svg>
);

const ForwardRef = forwardRef(Sort);
export default ForwardRef;
