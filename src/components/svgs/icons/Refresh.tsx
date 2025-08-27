import * as React from "react"
import { SVGProps } from "react"
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={62}
    height={74}
    fill="none"
    {...props}
  >
    <path
      stroke="#20C5BA"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={7.293}
      d="M38.05 51.343h18.232v18.232M23.464 22.171H5.232V3.94m52.575 21.89a29.171 29.171 0 0 0-52.261-3.745M3.708 47.685a29.171 29.171 0 0 0 52.257 3.745"
    />
  </svg>
)
export default SvgComponent
