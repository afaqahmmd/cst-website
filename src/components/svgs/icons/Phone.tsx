import * as React from "react"
import { SVGProps } from "react"
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={25}
    fill="none"
    {...props}
  >
    <path
      fill="#FFAB40"
      d="m7.388 10.784 1.998-1.83a3.72 3.72 0 0 0 .967-4.046L9.5 2.633A3.563 3.563 0 0 0 5.123.476C1.932 1.452-.52 4.419.233 7.94c.497 2.317 1.448 5.226 3.248 8.32a29.61 29.61 0 0 0 5.631 7.004c2.667 2.427 6.48 1.821 8.933-.466a3.533 3.533 0 0 0 .318-4.828L16.8 16.074a3.72 3.72 0 0 0-3.993-1.187l-2.582.813a12.275 12.275 0 0 1-1.74-2.275c-.473-.832-.841-1.72-1.098-2.642"
    />
  </svg>
)
export default SvgComponent
