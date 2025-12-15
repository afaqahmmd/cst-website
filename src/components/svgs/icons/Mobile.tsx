import * as React from "react"
import { SVGProps } from "react"
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
    <path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2.25}
      d="M8.15 2.01H4.775A3.375 3.375 0 0 0 1.4 5.385v24.75a3.375 3.375 0 0 0 3.375 3.375h11.25a3.375 3.375 0 0 0 3.375-3.375V5.385a3.375 3.375 0 0 0-3.375-3.375H12.65m-4.5 0v2.25h4.5V2.01m-4.5 0h4.5m-4.5 28.125h4.5"
    />
  </svg>
)
export default SvgComponent
