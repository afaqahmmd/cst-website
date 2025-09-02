import * as React from "react"
import { SVGProps } from "react"
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
    <path
      fill="#fff"
      d="M9.6 9.76h2.25v4.5H9.6v-4.5Zm0 6.75h2.25v4.5H9.6v-4.5Zm6.75-6.75h2.25v4.5h-2.25v-4.5Zm0 6.75h2.25v4.5h-2.25v-4.5ZM9.6 23.26h2.25v4.5H9.6v-4.5Zm6.75 0h2.25v4.5h-2.25v-4.5Z"
    />
    <path
      fill="#fff"
      d="M34.35 16.51a2.25 2.25 0 0 0-2.25-2.25h-6.75v-9a2.25 2.25 0 0 0-2.25-2.25h-18a2.25 2.25 0 0 0-2.25 2.25v29.25h31.5v-18ZM5.1 5.26h18v27h-18v-27Zm20.25 27V16.51h6.75v15.75h-6.75Z"
    />
  </svg>
)
export default SvgComponent
