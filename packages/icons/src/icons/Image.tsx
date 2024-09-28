import { forwardRef, Ref, SVGProps } from 'react';

const Image = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    ref={ref}
    {...props}
  >
    <path
      fill="currentColor"
      d="M4.641 17.4c-.57 0-1.052-.2-1.448-.6-.395-.401-.593-.882-.593-1.441V4.64c0-.56.198-1.04.593-1.44.396-.401.879-.601 1.448-.601H15.36c.57 0 1.052.2 1.448.6.396.401.593.882.593 1.441V15.36c0 .56-.197 1.04-.593 1.44-.396.401-.879.601-1.448.601H4.64Zm0-2.041H15.36V4.64H4.64V15.36ZM5.3 14.14h9.4l-3.2-4.376-2.25 3-1.5-2L5.3 14.14Z"
    />
  </svg>
);

const ForwardRef = forwardRef(Image);
export default ForwardRef;
