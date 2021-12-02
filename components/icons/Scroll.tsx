import * as React from "react";
import { SVGProps } from "react";

export const Scroll = (props: SVGProps<SVGSVGElement>) => (
  <svg fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <g clipPath="url(#a)">
      <path
        d="M20.241 7.593a1.25 1.25 0 0 1 1.25 1.25v5a1.25 1.25 0 0 1-2.5 0v-5a1.25 1.25 0 0 1 1.25-1.25Zm10 20a10 10 0 0 1-20 0v-15a10 10 0 1 1 20 0v15Zm-10-27.5a12.5 12.5 0 0 0-12.5 12.5v15a12.5 12.5 0 0 0 25 0v-15a12.5 12.5 0 0 0-12.5-12.5Z"
        fill="#fff"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" transform="translate(.241 .093)" d="M0 0h40v40H0z" />
      </clipPath>
    </defs>
  </svg>
);
