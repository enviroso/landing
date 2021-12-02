import * as React from "react";
import { SVGProps } from "react";

export const Coin = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={31}
    height={31}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M14.392 12.11h5a1.25 1.25 0 1 0 0-2.5h-2.5V8.36a1.25 1.25 0 0 0-2.5 0v1.25a3.75 3.75 0 1 0 0 7.5h2.5a1.25 1.25 0 1 1 0 2.5h-5a1.25 1.25 0 1 0 0 2.5h2.5v1.25a1.25 1.25 0 1 0 2.5 0v-1.25a3.75 3.75 0 1 0 0-7.5h-2.5a1.25 1.25 0 1 1 0-2.5Zm1.25-10a13.75 13.75 0 1 0 0 27.5 13.75 13.75 0 0 0 0-27.5Zm0 25a11.25 11.25 0 1 1 0-22.502 11.25 11.25 0 0 1 0 22.502Z" />
  </svg>
);
