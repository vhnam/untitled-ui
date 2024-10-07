import { forwardRef, Ref, SVGProps } from 'react';

const CreditCard = (
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
      d="M18.4 5.641v8.718c0 .56-.197 1.04-.593 1.44-.396.401-.879.601-1.448.601H3.64c-.56 0-1.04-.2-1.44-.6-.401-.401-.601-.882-.601-1.441V5.64c0-.56.2-1.04.6-1.44.401-.401.882-.601 1.441-.601H16.36c.57 0 1.052.2 1.448.6.396.401.593.882.593 1.441ZM3.641 6.965H16.36V5.64H3.64v1.324Zm0 3v4.394H16.36V9.965H3.64Z"
    />
  </svg>
);

const ForwardRef = forwardRef(CreditCard);
export default ForwardRef;
