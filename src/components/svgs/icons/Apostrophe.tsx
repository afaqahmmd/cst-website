import * as React from "react"
import { SVGProps } from "react"
const SvgComponent = ({currentColor, ...props}: SVGProps<SVGSVGElement> & {currentColor: string}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={42}
    height={34}
    fill="none"
    {...props}
  >
    <path
      fill={currentColor}
      d="M16.267 16.942H4.89v-.017a9.307 9.307 0 0 1 4.152-7.76l7.136-4.76a2.026 2.026 0 0 0 .56-2.815 2.034 2.034 0 0 0-2.824-.56L6.779 5.79A13.364 13.364 0 0 0 .827 16.926v15.456c0 .448.36.816.816.816h14.624c.448 0 .816-.36.816-.816V17.758a.81.81 0 0 0-.816-.816Zm24.384 0H29.275v-.017a9.307 9.307 0 0 1 4.152-7.76l7.136-4.76a2.026 2.026 0 0 0 .56-2.815 2.034 2.034 0 0 0-2.824-.56l-7.136 4.76a13.343 13.343 0 0 0-5.96 11.136v15.456c0 .448.36.816.816.816H40.65c.448 0 .816-.36.816-.816V17.758a.814.814 0 0 0-.816-.816Z"
    />
  </svg>
)
export default SvgComponent
