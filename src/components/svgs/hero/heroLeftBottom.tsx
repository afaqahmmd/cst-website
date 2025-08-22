import * as React from "react";
import { SVGProps } from "react";

interface Props extends SVGProps<SVGSVGElement> {
  width?: number | string;
  height?: number | string;
}

const SvgComponent = ({ width = 371, height = 284, ...props }: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 371 284" 
    width={width}
    height={height}
    fill="none"
    {...props}
  >
    <path
      fill="#19817A"
      fillOpacity={0.3}
      d="M368.609 283.691A252.998 252.998 0 0 0-.559 29.899l65.534 124.359a112.424 112.424 0 0 1 116.108 6.816 112.43 112.43 0 0 1 47.945 105.965l139.581 16.652Z"
    />
    <circle cx={20} cy={100} r={35} fill="#F6F6F6" />
  </svg>
);

export default SvgComponent;
