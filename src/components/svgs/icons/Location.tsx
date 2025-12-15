import * as React from "react"
import { SVGProps } from "react"
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={37}
    height={37}
    fill="none"
    {...props}
  >
    <path
      fill="#FFAB40"
      d="M19.739 19.53a7.036 7.036 0 1 0-2.222 0v9.344a1.11 1.11 0 1 0 2.222 0V19.53Z"
    />
    <path
      fill="#FFAB40"
      d="M16.026 24.27a1.111 1.111 0 0 1-.948 1.254A25.382 25.382 0 0 0 4.436 29.58a1.11 1.11 0 1 1-1.235-1.846 27.621 27.621 0 0 1 11.572-4.412 1.111 1.111 0 0 1 1.253.948Zm5.204 0a1.11 1.11 0 0 1 1.253-.947 27.621 27.621 0 0 1 11.572 4.412 1.11 1.11 0 0 1-1.235 1.845 25.384 25.384 0 0 0-10.642-4.058 1.11 1.11 0 0 1-.948-1.251Z"
    />
  </svg>
)
export default SvgComponent
