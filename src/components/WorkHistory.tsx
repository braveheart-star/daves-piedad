import React from "react";

interface WorkHistoryProps extends StandardReactProps {
  period: string;
  children: any;
}

export const WorkHistory = (props: WorkHistoryProps) => {
  const { children, period } = props;

  return (
    <div>
      <div className="container flex flex-wrap px-5 py-3 mx-auto lg:my-4">
        <div className="flex flex-wrap w-full">
          <div className="flex w-full">
            <div className="relative flex lg:w-2/5">
              <div className="absolute inset-0 flex items-center justify-center w-3 h-full mt-6">
                <div
                  className="h-full bg-gray-200 pointer-events-none"
                  style={{ width: "2px" }}
                ></div>
              </div>
              <div className="relative z-10 inline-flex items-center justify-center flex-shrink-0 w-3 h-3 mt-2 text-white bg-gray-600 rounded-full"></div>
              <div className="flex-grow hidden mt-1 ml-4 lg:flex">
                <h2 className="text-sm font-medium tracking-wider text-gray-600 ">
                  {period}
                </h2>
              </div>
            </div>
            <div className="w-full ml-8 text-gray-600 lg:ml-24 ">
              <h2 className="pb-2 text-sm font-medium tracking-wider text-gray-600 lg:hidden">
                {period}
              </h2>
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
