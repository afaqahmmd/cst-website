import * as React from "react"
import { SVGProps } from "react"
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={19}
    height={17}
    fill="none"
    {...props}
  >
    <path
      fill="#19817A"
      d="M14.675.477h2.76l-6.03 6.909L18.5 16.79h-5.554l-4.354-5.702-4.975 5.702H.854l6.449-7.393L.5.477h5.696l3.929 5.212 4.55-5.212Zm-.97 14.657h1.53L5.36 2.046H3.72l9.984 13.088Z"
    />
  </svg>
)
export default SvgComponent
