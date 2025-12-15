import * as React from "react"
import { SVGProps } from "react"

const EllipseDown = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 409 275"  // <-- Added
    fill="none"
    {...props}
  >
    <path
      stroke="#6CC1E7"
      strokeWidth={25}
      d="M-63.446 222.342C-49.034 93.358 65.21.256 191.724 14.392 318.238 28.53 409.115 144.551 394.702 273.535"
    />
  </svg>
)

export default EllipseDown
