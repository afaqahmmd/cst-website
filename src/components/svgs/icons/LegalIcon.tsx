import * as React from "react"
import { SVGProps } from "react"
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" {...props}>
    <path
      stroke="#A7D266"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={3.532}
      d="M23.79 27.478 12.195 41.124a4.104 4.104 0 0 1-6.038.24 4.12 4.12 0 0 1 .243-6.051L20.01 23.691m22.617.113-11.66 11.687m-7.29-30.68-11.66 11.689m35.32 11.053 4.71-3.862m-4.71 11.585 4.71 2.574M26.15 51.9h23.542m-20.657 0c1.297-2.326 2.267-6.776 6.863-7.024a37.613 37.613 0 0 1 4.121 0c4.594.248 5.57 4.698 6.869 7.024M22.22 6.274l-8.743 8.765s4.373 5.844 8.745 10.226c4.375 4.382 10.206 8.767 10.206 8.767l8.745-8.767s-4.373-5.842-8.745-10.226c-4.373-4.38-10.208-8.765-10.208-8.765Z"
    />
  </svg>
)
export default SvgComponent
