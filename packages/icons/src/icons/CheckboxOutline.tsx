import { forwardRef, Ref, SVGProps } from 'react';

const CheckboxOutline = (
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
    <mask
      id="a"
      width={20}
      height={20}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: 'alpha',
      }}
    >
      <path fill="currentColor" d="M0 0h20v20H0z" />
    </mask>
    <g mask="url(#a)">
      <path
        fill="currentColor"
        d="M4.641 17.4a1.97 1.97 0 0 1-1.448-.593 1.97 1.97 0 0 1-.593-1.448V4.64c0-.57.198-1.052.593-1.448A1.97 1.97 0 0 1 4.641 2.6H15.36c.57 0 1.052.197 1.448.593.396.396.593.879.593 1.448V15.36a1.97 1.97 0 0 1-.593 1.448 1.97 1.97 0 0 1-1.448.593H4.64Zm0-2.041H15.36V4.64H4.64V15.36Z"
      />
    </g>
  </svg>
);

const ForwardRef = forwardRef(CheckboxOutline);
export default ForwardRef;
