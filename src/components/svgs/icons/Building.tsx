import * as React from "react"
import { SVGProps } from "react"
const SvgComponent = ({ fill = "#2B2B2B", stroke = "#2B2B2B", ...props }: SVGProps<SVGSVGElement> & { fill?: string; stroke?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={26}
    height={26}
    fill="none"
    {...props}
  >
    <path
      stroke={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2.042}
      d="M23.71 24.666V7.73c0-1.28 0-1.92-.37-2.461-.367-.54-1.045-.895-2.402-1.606l-1.726-.903c-2.128-1.115-3.194-1.673-4.014-1.327-.822.345-.822 1.35-.822 3.36v4.705m10.5 15.167H1.542M23.71 8.332h-2.333m2.333 3.5h-2.333m2.333 3.5h-2.333"
    />
    <path
      stroke={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2.042}
      d="M12.626 14.169h1.167m-1.167 3.5h1.167m-5.25-3.5c0-2.2 0-3.3.684-3.983.683-.684 1.782-.684 3.983-.684 2.2 0 3.299 0 3.983.684.683.683.683 1.782.683 3.983v10.5H8.543v-10.5ZM3.292 17.669c.967 0 1.75-1.045 1.75-2.334 0-1.288-.783-2.333-1.75-2.333-.966 0-1.75 1.045-1.75 2.333 0 1.289.784 2.334 1.75 2.334ZM3.293 17.668v7"
    />
  </svg>
)
export default SvgComponent
