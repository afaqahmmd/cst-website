import * as React from "react"
import { SVGProps } from "react"
const SvgComponent = ({ fill = "#2B2B2B", stroke, ...props }: SVGProps<SVGSVGElement> & { fill?: string; stroke?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={29}
    height={28}
    fill="none"
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        fill={fill}
        d="M23.648 20.804a2.275 2.275 0 0 0 2.268-2.269V7.192a2.275 2.275 0 0 0-2.268-2.268H5.5A2.275 2.275 0 0 0 3.23 7.192v11.343A2.275 2.275 0 0 0 5.5 20.804H.962v2.268h27.223v-2.268h-4.537ZM5.5 7.192h18.148v11.343H5.5V7.192Z"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M.963.389h27.223v27.223H.963z" />
      </clipPath>
    </defs>
  </svg>
)
export default SvgComponent
