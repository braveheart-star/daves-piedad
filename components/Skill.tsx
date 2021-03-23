import React from "react";
import { StandardReactProps } from "../interfaces";

interface SkillProps extends StandardReactProps {
  borderColor1: string;
  borderColor2: string;
  backColor: string;
  pic: any;
  picSize: string;
  title: string;
  degree: number;
  degreeColor: string;
}

export const Skill = (props: SkillProps) => {
  const {
    borderColor1,
    borderColor2,
    backColor,
    pic,
    picSize,
    title,
    degree,
    degreeColor,
  } = props;
  return (
    <div className="w-40 mx-auto border rounded-lg md:w-32 lg:w-40 xl:w-40">
      <div
        className={`${borderColor1} relative h-32 p-3 border-b-4  rounded-lg shadow-lg`}
      >
        <div
          className={`absolute w-16 h-16 ${picSize} -mt-8 -ml-8 overflow-hidden ${backColor} border ${borderColor2} rounded-full`}
        >
          <img
            src={pic}
            alt="avatar"
            className={` w-full h-full object-cover object-center mx-auto rounded`}
          />
        </div>
        <p className="items-center my-4 text-lg font-hairline text-center text-gray-700 ">
          {title}
        </p>

        <div className="relative w-full h-1 my-10 text-gray-700 bg-gray-400 rounded ">
          <div
            className={` ${
              degree > 80
                ? degree > 90
                  ? degree > 95
                    ? degree > 98
                      ? `w-full`
                      : `w-11/12`
                    : "w-10/12"
                  : ` w-9/12`
                : ` w-8/12`
            } absolute inset-0  h-1 ${degreeColor} rounded `}
          >
            <div className="relative ">
              <div
                className={`absolute right-0 p-1 -mt-8 -mr-4 text-sm ${degreeColor} border rounded-md shadow `}
              >
                <p className={`text-xs text-white `}>{`${degree}%`}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
