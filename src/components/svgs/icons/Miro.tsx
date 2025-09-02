import * as React from "react"
import { SVGProps } from "react"
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={46}
    height={46}
    fill="none"
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        fill="#FFD02F"
        stroke="#fff"
        d="M3.055.5h39.89C44.363.5 45.5 1.631 45.5 3.013v39.344c0 1.382-1.137 2.513-2.555 2.513H3.055C1.637 44.87.5 43.74.5 42.357V3.013C.5 1.63 1.637.5 3.055.5Z"
      />
      <path
        fill="#050038"
        d="M31.345 6.05h-4.91l4.359 6.666-9.216-6.665h-4.91l4.358 8.733L11.81 6.05H6.9l4.287 11.272-4.287 22h4.91l9.216-23.589-4.359 23.588h4.91l9.217-25.656-4.36 25.656h4.911l9.288-28.181-9.288-5.09Z"
      />
    </g>
    <defs>
      <clipPath id="a">
        <rect width={46} height={45.459} fill="#fff" rx={11} />
      </clipPath>
    </defs>
  </svg>
);
export default SvgComponent;
