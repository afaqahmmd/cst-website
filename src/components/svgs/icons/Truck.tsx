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
    <path
      fill={fill}
      d="M2.943 13.072h11.104v1.851H2.943v-1.85ZM1.092 8.445h9.254v1.851H1.092v-1.85Z"
    />
    <path
      fill={fill}
      d="m26.927 13.635-2.776-6.478a.926.926 0 0 0-.85-.56h-2.777V4.745a.925.925 0 0 0-.925-.926H4.793v1.851h13.88v11.62a3.7 3.7 0 0 0-1.719 2.26H11.14a3.702 3.702 0 1 0 0 1.852h5.815a3.683 3.683 0 0 0 7.14 0h1.983a.925.925 0 0 0 .925-.926V14a.923.923 0 0 0-.075-.365ZM7.57 22.328a1.851 1.851 0 1 1 0-3.703 1.851 1.851 0 0 1 0 3.703Zm12.955-13.88h2.166l1.984 4.626h-4.15V8.447Zm0 13.88a1.851 1.851 0 1 1 0-3.703 1.851 1.851 0 0 1 0 3.703Zm4.627-2.776h-1.056a3.697 3.697 0 0 0-3.57-2.776v-1.851h4.626v4.627Z"
    />
  </svg>
)
export default SvgComponent
