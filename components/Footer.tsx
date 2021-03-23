import React from "react";

export const Footer = () => {
  return (
    <div className="absolute bottom-0 w-full bg-green-400 shadow-md">
      <div className="container flex justify-center w-full px-2 mx-auto my-3 sm:my-6 sm:block">
        <div className="items-center sm:justify-between sm:flex">
          <p className="text-lg text-white"> Created by ShiXiong Han</p>

          <div className="flex text-lg">
            <p className="text-white "> Hong Kong</p>

            <p className="mx-6 text-white ">@ 2020-09-25</p>
          </div>
        </div>
      </div>
    </div>
  );
};
