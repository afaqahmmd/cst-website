import * as React from "react"
import { SVGProps } from "react"
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
    <path
      stroke="#fff"
      strokeLinecap="round"
      strokeWidth={2.25}
      d="M8.429 25.26C4.879 25.26 2 22.416 2 18.907c0-3.508 2.878-6.354 6.429-6.354.427.001.842.041 1.245.12m0 0a8.4 8.4 0 0 1-.531-2.943c0-4.678 3.837-8.47 8.571-8.47 4.41 0 8.042 3.29 8.52 7.522m-16.56 3.891c.83.162 1.62.485 2.325.951M20.571 8.8a8.7 8.7 0 0 1 5.663-.018m0 0C29.588 9.93 32 13.082 32 16.79c0 4.06-2.89 7.455-6.75 8.28"
    />
    <path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2.25}
      d="m14 26.46 1.714 1.8L20 23.76"
    />
  </svg>
)
export default SvgComponent
