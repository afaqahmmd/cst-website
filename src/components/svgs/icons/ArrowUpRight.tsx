import * as React from "react"
import { SVGProps } from "react"
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={34}
    height={34}
    fill="none"
    {...props}
  >
    <path
      stroke="#FFAB40"
      d="m7.447 26.656 18.56-18.56M12.817 8.293l13.122-.001-.001 13.122"
    />
  </svg>
)
export default SvgComponent
