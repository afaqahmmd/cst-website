import * as React from "react"
import { SVGProps } from "react"
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={50}
    height={45}
    fill="none"
    {...props}
  >
    <path
      fill="url(#a)"
      d="M29.86 19.019a2.291 2.291 0 0 0-3.24 0L25 20.637a4.584 4.584 0 0 1-6.48-6.481L31.42 1.249a14.896 14.896 0 0 1 14.614 24.218l-4.83 4.893L29.86 19.019ZM4.745 5.24a14.896 14.896 0 0 1 18.354-2.15l-7.821 7.824A9.167 9.167 0 0 0 27.91 24.193l.33-.314 9.723 9.721-9.723 9.724a4.583 4.583 0 0 1-6.481 0L4.742 26.306a14.896 14.896 0 0 1 .002-21.065Z"
    />
    <defs>
      <linearGradient
        id="a"
        x1={25}
        x2={25}
        y1={0.875}
        y2={44.666}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#C63434" />
        <stop offset={1} stopColor="#CC3939" />
      </linearGradient>
    </defs>
  </svg>
)
export default SvgComponent
