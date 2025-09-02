import * as React from "react"
import { SVGProps } from "react"
const SvgComponent = (props: SVGProps<SVGSVGElement> & { width?: number, height?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" {...props}
  width={props.width}
  height={props.height}
  >
    <path
      stroke="#20C5BA"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={4.401}
      d="M58.909 61.7V19.108c0-3.221 0-4.83-.927-6.191-.925-1.358-2.63-2.25-6.042-4.038l-4.343-2.27c-5.352-2.806-8.031-4.209-10.094-3.34-2.069.869-2.069 3.398-2.069 8.45v11.835M61.844 61.7H3.156m55.752-41.08H53.04m5.869 8.803H53.04m5.869 8.803H53.04"
    />
    <path
      stroke="#20C5BA"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={4.401}
      d="M31.033 35.291h2.934m-2.934 8.803h2.934m-13.204-8.803c0-5.534 0-8.298 1.72-10.017 1.719-1.72 4.483-1.72 10.017-1.72s8.298 0 10.018 1.72c1.72 1.719 1.72 4.483 1.72 10.017v26.41H20.762V35.29ZM7.558 44.094c2.431 0 4.402-2.627 4.402-5.868 0-3.242-1.97-5.87-4.402-5.87-2.43 0-4.401 2.628-4.401 5.87 0 3.24 1.97 5.868 4.401 5.868ZM7.558 44.094V61.7"
    />
  </svg>
)
export default SvgComponent
