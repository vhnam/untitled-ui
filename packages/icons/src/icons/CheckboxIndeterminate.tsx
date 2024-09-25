import { forwardRef, Ref, SVGProps } from "react";

const CheckboxIndeterminate = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>,
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
        maskType: "alpha",
      }}
    >
      <path fill="currentColor" d="M0 0h20v20H0z" />
    </mask>
    <g mask="url(#a)">
      <path
        fill="currentColor"
        d="M7 10.927h6V9.073H7v1.854ZM4.641 17.4a1.97 1.97 0 0 1-1.448-.593 1.97 1.97 0 0 1-.593-1.448V4.64c0-.57.198-1.052.593-1.448A1.97 1.97 0 0 1 4.641 2.6H15.36c.57 0 1.052.197 1.448.593.396.396.593.879.593 1.448V15.36a1.97 1.97 0 0 1-.593 1.448 1.97 1.97 0 0 1-1.448.593H4.64Z"
      />
    </g>
  </svg>
);

const ForwardRef = forwardRef(CheckboxIndeterminate);
export default ForwardRef;
