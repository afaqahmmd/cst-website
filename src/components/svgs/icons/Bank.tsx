import * as React from "react"
import { SVGProps } from "react"
const SvgComponent = ({ fill = "#2B2B2B", stroke = "#2B2B2B", ...props }: SVGProps<SVGSVGElement> & { fill?: string; stroke?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <path
      stroke={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.928}
      d="M21.834 19.438H2.584c-.644 0-1.167.522-1.167 1.166v1.167c0 .644.523 1.166 1.167 1.166h19.25c.645 0 1.167-.522 1.167-1.166v-1.167c0-.644-.523-1.166-1.167-1.166ZM4.334 9.522v9.928m15.75-9.928v9.928m-4.958-9.928v9.928M9.292 9.522v9.928M11.09 1.677 2.024 6.635a1.167 1.167 0 0 0-.607 1.024v1.163a.7.7 0 0 0 .7.7h20.184a.7.7 0 0 0 .7-.7V7.659a1.166 1.166 0 0 0-.607-1.024L13.33 1.677a2.333 2.333 0 0 0-2.24 0Z"
    />
  </svg>
)
export default SvgComponent
