import { forwardRef, Ref, SVGProps } from 'react';

const Warning = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    ref={ref}
    {...props}
  >
    <path
      fill="currentColor"
      d="M.658 17.2 10 1.6l9.341 15.6H.658Zm3.282-1.865h12.12L10 5.246l-6.06 10.09Zm6.056-.87c.219 0 .409-.08.57-.238a.767.767 0 0 0 .243-.567c0-.219-.08-.407-.238-.565a.776.776 0 0 0-.567-.236c-.219 0-.41.077-.57.232a.748.748 0 0 0-.243.56c0 .22.08.41.238.571a.767.767 0 0 0 .567.243ZM9.25 12h1.5V8.13h-1.5V12Z"
    />
  </svg>
);

const ForwardRef = forwardRef(Warning);
export default ForwardRef;
