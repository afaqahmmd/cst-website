import * as React from "react"
import { SVGProps } from "react"
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
    <path
      stroke="#fff"
      strokeLinejoin="round"
      strokeWidth={2.25}
      d="M2.05 17.76a15.75 15.75 0 1 0 31.5 0 15.75 15.75 0 0 0-31.5 0Z"
    />
    <path
      stroke="#fff"
      strokeLinejoin="round"
      strokeWidth={2.25}
      d="M11.05 17.76c0-4.177.711-8.183 1.977-11.137C14.293 3.669 16.01 2.01 17.8 2.01c1.79 0 3.507 1.66 4.773 4.613 1.266 2.954 1.977 6.96 1.977 11.137 0 4.177-.71 8.183-1.977 11.137-1.266 2.953-2.983 4.613-4.773 4.613-1.79 0-3.507-1.66-4.773-4.613-1.265-2.954-1.977-6.96-1.977-11.137Z"
    />
    <path
      stroke="#fff"
      strokeLinecap="round"
      strokeWidth={2.25}
      d="M3.175 23.01h29.25m-29.25-10.5h29.25"
    />
  </svg>
)
export default SvgComponent
