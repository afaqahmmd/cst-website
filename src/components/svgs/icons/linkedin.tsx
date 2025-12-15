import * as React from "react"
import { SVGProps } from "react"
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={15}
    height={15}
    fill="none"
    {...props}
  >
    <path
      fill="#19817A"
      d="M15 9.073v5.515h-3.229v-5.18c0-1.277-.47-2.152-1.614-2.152-.874 0-1.413.606-1.614 1.144-.068.202-.135.47-.135.807v5.381H5.18s.068-8.744 0-9.619h3.23v1.346C8.811 5.642 9.618 4.7 11.3 4.7c2.086 0 3.7 1.413 3.7 4.373ZM1.816.328C.74.328 0 1.068 0 2.01 0 2.95.673 3.69 1.749 3.69c1.143 0 1.816-.74 1.816-1.681C3.632 1 2.96.328 1.816.328ZM.202 14.588H3.43V4.97H.202v9.62Z"
    />
  </svg>
)
export default SvgComponent
