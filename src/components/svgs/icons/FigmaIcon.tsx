import * as React from "react"
import { SVGProps } from "react"

const FigmaIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 80 80"   // ✅ correct full bounds
    fill="none"
    {...props}
  >
    <path fill="#0ACF83" d="M28.182 79.688a13.25 13.25 0 0 0 13.27-13.27v-13.27h-13.27a13.25 13.25 0 0 0-13.27 13.27 13.25 13.25 0 0 0 13.27 13.27Z" />
    <path fill="#A259FF" d="M14.913 39.879a13.25 13.25 0 0 1 13.27-13.27h13.269v26.54h-13.27a13.25 13.25 0 0 1-13.27-13.27Z" />
    <path fill="#F24E1E" d="M14.913 13.34A13.25 13.25 0 0 1 28.183.07h13.269v26.54h-13.27a13.25 13.25 0 0 1-13.27-13.27Z" />
    <path fill="#FF7262" d="M41.452.07h13.27A13.25 13.25 0 0 1 67.99 13.34a13.25 13.25 0 0 1-13.27 13.27h-13.27V.07Z" />
    <path fill="#1ABCFE" d="M67.99 39.879a13.25 13.25 0 0 1-13.269 13.27 13.25 13.25 0 0 1-13.27-13.27 13.25 13.25 0 0 1 13.27-13.27 13.25 13.25 0 0 1 13.27 13.27Z" />
  </svg>
)

export default FigmaIcon
