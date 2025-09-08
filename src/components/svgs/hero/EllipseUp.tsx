import * as React from "react"
import { SVGProps } from "react"

const EllipseUp = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 461 226"  // <-- Added
    fill="none"
    {...props}
  >
    <path
      stroke="#D265A9"
      strokeWidth={25}
      d="M449.434 84.585c-59.568 115.31-199.545 161.421-312.646 102.993C23.687 129.15-19.71-11.692 39.858-127.001"
    />
  </svg>
)

export default EllipseUp
