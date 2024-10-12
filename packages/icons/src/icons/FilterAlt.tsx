import { forwardRef, Ref, SVGProps } from 'react';

const FilterAlt = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    ref={ref}
    {...props}
  >
    <path
      fill="currentColor"
      d="M9.503 16.4a.87.87 0 0 1-.634-.267.861.861 0 0 1-.27-.633v-4.588L3.798 5.048c-.235-.3-.272-.616-.11-.95.161-.332.432-.498.812-.498h11c.38 0 .65.166.812.499.161.333.125.649-.11.949L11.4 10.912v4.718c0 .22-.073.403-.22.55a.745.745 0 0 1-.55.22H9.503ZM10 9.39l3.068-3.749H6.91L10 9.39Z"
    />
  </svg>
);

const ForwardRef = forwardRef(FilterAlt);
export default ForwardRef;
