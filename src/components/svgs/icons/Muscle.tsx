import * as React from "react"
import { SVGProps } from "react"
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={44}
    height={44}
    fill="none"
    {...props}
  >
    <path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={2}
      strokeWidth={3}
      d="M19.506 33.621c1.44-5.25 6.48-9 12.284-8.38 5.525.59 9.918 5.28 10.196 10.86.07 1.47-.129 2.88-.556 4.19-.259.8-1.034 1.33-1.879 1.33H9.953c-5.017 0-8.78-4.619-7.796-9.569l6.049-30.43h11.926l3.975 7-8.517 6.13-2.415-3.13m2.425 3.13 4.532 16.87"
    />
  </svg>
)
export default SvgComponent
