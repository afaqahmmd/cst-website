import * as React from "react"
import { SVGProps } from "react"
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={82}
    height={81}
    fill="none"
    {...props}
  >
  
      <path
        fill="#242938"
        d="M62.489.02H19.51C9.039.02.55 8.509.55 18.98V61.96c0 10.471 8.489 18.96 18.96 18.96H62.49c10.472 0 18.96-8.489 18.96-18.96V18.98C81.45 8.51 72.962.02 62.49.02Z"
      />
      <path
        fill="url(#b)"
        fillRule="evenodd"
        d="M26.78 34.783c1.895-7.585 6.636-11.377 14.22-11.377 11.377 0 12.799 8.533 18.487 9.955 3.792.948 7.11-.474 9.954-4.266-1.896 7.584-6.636 11.376-14.22 11.376-11.377 0-12.799-8.532-18.487-9.954-3.792-.948-7.11.474-9.955 4.266ZM12.558 51.848c1.896-7.585 6.636-11.377 14.22-11.377 11.377 0 12.799 8.533 18.487 9.955 3.792.948 7.11-.474 9.955-4.267C53.325 53.744 48.584 57.536 41 57.536c-11.377 0-12.799-8.532-18.487-9.955-3.792-.948-7.11.474-9.954 4.267Z"
        clipRule="evenodd"
      />
    <defs>
      <linearGradient
        id="b"
        x1={27.885}
        x2={52.219}
        y1={23.406}
        y2={58.642}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#32B1C1" />
        <stop offset={1} stopColor="#14C6B7" />
      </linearGradient>
     
    </defs>
  </svg>
)
export default SvgComponent
