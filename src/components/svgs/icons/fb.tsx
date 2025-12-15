import * as React from "react"
import { SVGProps } from "react"
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={12}
    height={24}
    fill="none"
    {...props}
  >
    <path
      fill="#19817A"
      d="M7.657 12.693h3.722l.585-3.804H7.656v-2.08c0-1.58.514-2.981 1.983-2.981H12V.508c-.415-.056-1.292-.18-2.95-.18-3.462 0-5.491 1.84-5.491 6.03v2.53H0v3.805h3.559v10.456c.704.107 1.418.18 2.151.18.662 0 1.309-.062 1.947-.149V12.693Z"
    />
  </svg>
)
export default SvgComponent
