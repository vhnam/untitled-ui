import { forwardRef, Ref, SVGProps } from 'react';

const Edit = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    ref={ref}
    {...props}
  >
    <path
      fill="currentColor"
      d="M4.63 15.359h1.074l7.012-7.012-1.051-1.063L4.63 14.32v1.039ZM2.6 17.4v-3.94L12.95 3.095c.168-.176.354-.303.556-.38a1.755 1.755 0 0 1 1.84.368l1.569 1.534a1.748 1.748 0 0 1 .496 1.218c0 .224-.04.44-.122.65a1.61 1.61 0 0 1-.374.563L6.564 17.4H2.6Zm9.587-9.587-.522-.529 1.05 1.063-.528-.534Z"
    />
  </svg>
);

const ForwardRef = forwardRef(Edit);
export default ForwardRef;
