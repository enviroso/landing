import * as React from "react";
import { SVGProps } from "react";

export const BlurredBlob = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={1112}
    height={900}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
    fill="none"
  >
    <g filter="url(#a)">
      <circle cx={326.273} cy={428.755} r={185} fill={props.fill} />
    </g>
    <defs>
      <filter
        id="a"
        x={-458.727}
        y={-356.245}
        width={1570}
        height={1570}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feGaussianBlur
          stdDeviation={300}
          result="effect1_foregroundBlur_10_174"
        />
      </filter>
    </defs>
  </svg>
);
