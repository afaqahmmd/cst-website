import * as React from "react"
import { SVGProps } from "react"
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={37}
    height={47}
    fill="none"
    {...props}
  >
    <path
      fill="#424242"
      d="M18.5.586C12.198.586 7.04 5.742 7.04 12.044v4.584h4.584v-4.584c0-3.781 3.094-6.875 6.875-6.875s6.875 3.094 6.875 6.875v4.584h4.583v-4.584C29.958 5.742 24.802.586 18.5.586Z"
    />
    <path
      fill="#FB8C00"
      d="M32.25 46.417H4.75a4.597 4.597 0 0 1-4.583-4.584V21.208a4.597 4.597 0 0 1 4.583-4.583h27.5a4.597 4.597 0 0 1 4.583 4.583v20.625a4.597 4.597 0 0 1-4.583 4.584Z"
    />
    <path
      fill="#C76E00"
      d="M18.5 34.96a3.437 3.437 0 1 0 0-6.874 3.437 3.437 0 0 0 0 6.875Z"
    />
  </svg>
)
export default SvgComponent
