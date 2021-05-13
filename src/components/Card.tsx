import React from "react";
import { StandardReactProps } from "../utils/interface";

interface CardProps extends StandardReactProps {
  id?: string;
  children: any;
}

export const Card = (props: CardProps) => {
  const { id, children } = props;
  return (
    <div
      id={id}
      className="container flex w-full max-w-screen-lg px-4 mx-auto my-8 "
    >
      <div className="w-full mx-auto bg-white shadow-md">
        <div className="m-6 md:m-16">
          <div className={`md:py-5 lg:py-12 p-3 rounded ${props.className}`}>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};
