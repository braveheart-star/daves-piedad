import React from "react";
import { StandardReactProps } from "../../../utils/interface";

export const AlphaSwap = (props: StandardReactProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fillRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit="2"
      clipRule="evenodd"
      viewBox="0 0 160 120"
      className={props.className}
    >
      <path fill="#b0adad" d="M39 84.9h17.1l-8.5 14.8H30.4L39 84.9z"></path>
      <path
        fill="#50b6e4"
        d="M43.3 77.5l34.3-59.4h17.1l21.5 37.1H99L86.1 32.9 69 62.6h51.4l21.5 37.1h-17.2l-12.8-22.2H43.3z"
      ></path>
    </svg>
  );
};
