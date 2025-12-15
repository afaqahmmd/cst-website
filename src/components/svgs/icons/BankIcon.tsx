import * as React from "react"
import { SVGProps } from "react"
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
    <path
      stroke="#6CC1E7"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={4.401}
      d="M53.708 48.066H5.292a2.934 2.934 0 0 0-2.935 2.935v2.934a2.934 2.934 0 0 0 2.935 2.934h48.416a2.934 2.934 0 0 0 2.934-2.934v-2.934a2.934 2.934 0 0 0-2.934-2.935ZM9.693 23.119v24.97m39.614-24.97v24.97M36.836 23.12v24.97M22.164 23.12v24.97m4.519-44.7-22.8 12.47a2.935 2.935 0 0 0-1.526 2.574v2.925a1.76 1.76 0 0 0 1.761 1.76h50.764a1.76 1.76 0 0 0 1.76-1.76v-2.925a2.934 2.934 0 0 0-1.525-2.574l-22.8-12.47a5.869 5.869 0 0 0-5.634 0Z"
    />
  </svg>
)
export default SvgComponent
