import * as React from "react"
import { SVGProps } from "react"
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={25}
    height={22}
    fill="none"
    {...props}
  >
    <path
      fill="#FFAB40"
      d="M19.094.063H6.076a4.96 4.96 0 0 0-4.96 4.959V16.18a4.96 4.96 0 0 0 4.96 4.959h13.018a4.96 4.96 0 0 0 4.96-4.96V5.022a4.96 4.96 0 0 0-4.96-4.96Z"
    />
    <path
      fill="#FFAB40"
      d="m1.174 5.14 8.933 5.121a4.91 4.91 0 0 0 4.929 0l8.958-5.12"
    />
    <path
      stroke="#2B2B2B"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.86}
      d="m1.174 5.14 8.933 5.121a4.91 4.91 0 0 0 4.929 0l8.958-5.12"
    />
  </svg>
)
export default SvgComponent