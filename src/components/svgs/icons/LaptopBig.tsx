import * as React from "react"
import { SVGProps } from "react"
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
    <path
      fill="#579DFF"
      d="M47.338 33.485c2.59 0 4.71-2.12 4.71-4.71V5.229c0-2.59-2.12-4.709-4.71-4.709H9.662c-2.59 0-4.709 2.12-4.709 4.71v23.547c0 2.59 2.12 4.709 4.71 4.709H.242v4.71h56.514v-4.71h-9.42ZM9.662 5.228h37.676v23.548H9.662V5.228Z"
    />
  </svg>
)
export default SvgComponent
