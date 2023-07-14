import React from "react";
import { StandardReactProps } from "../../../utils/interface";

export const Pillar = (props: StandardReactProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      fill="none"
      viewBox="0 0 40 40"
      className={props.className}
    >
      <rect width="40" height="40" fill="#303030" rx="4"></rect>
      <path
        fill={"#FFF"}
        d="M15.675 12.318l-.789-.95h10.228l-.788.95h-8.652zM14.502 10.68L13.5 9.471h13l-1.002 1.207H14.502zM24.326 27.717l.788.95H14.886l.788-.95h8.652zM25.498 29.32l1.002 1.208h-13l1.002-1.207h10.996zM17.105 13.274h1.253v13.452h-1.253V13.274zM21.646 13.274h1.252v13.452h-1.252V13.274z"
      ></path>
    </svg>
  );
};
