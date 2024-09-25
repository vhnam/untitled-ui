import { forwardRef, Ref, SVGProps } from "react";

const Notifications = (
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
    <path
      fill="currentColor"
      d="M3.6 15.9V13.86h.858v-4.6c0-1.31.393-2.473 1.18-3.488.786-1.014 1.816-1.645 3.091-1.89V2.87c0-.353.124-.654.37-.9.248-.248.548-.371.901-.371s.653.123.9.37.37.548.37.9v1.01c1.284.246 2.316.875 3.098 1.885.783 1.011 1.174 2.176 1.174 3.494v4.6h.858V15.9H3.6Zm6.407 2.63c-.452 0-.838-.16-1.158-.479a1.569 1.569 0 0 1-.479-1.15h3.271c0 .455-.16.84-.48 1.156-.32.315-.704.473-1.154.473ZM6.5 13.859h7v-4.6c0-.972-.34-1.798-1.02-2.479-.681-.68-1.508-1.02-2.48-1.02s-1.799.34-2.48 1.02c-.68.68-1.02 1.507-1.02 2.48v4.599Z"
    />
  </svg>
);

const ForwardRef = forwardRef(Notifications);
export default ForwardRef;
