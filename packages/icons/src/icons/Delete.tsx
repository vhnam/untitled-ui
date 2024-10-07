import { forwardRef, Ref, SVGProps } from 'react';

const Delete = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    ref={ref}
    {...props}
  >
    <path
      fill="currentColor"
      d="M6.37 17.4a1.97 1.97 0 0 1-1.448-.593 1.97 1.97 0 0 1-.594-1.448v-9.73h-1.27V3.59h4.67V2.316h4.519v1.271h4.695V5.63H15.67v9.72c0 .58-.198 1.066-.594 1.46-.396.394-.878.59-1.448.59H6.37Zm7.26-11.77H6.37v9.729h7.26v-9.73Zm-5.842 8.358h1.77v-7h-1.77v7Zm2.653 0h1.77v-7h-1.77v7Z"
    />
  </svg>
);

const ForwardRef = forwardRef(Delete);
export default ForwardRef;
