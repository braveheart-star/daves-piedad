import React from "react";
import Image from "next/image";
import { StarIcon } from "./icons/StarIcon";
import { StartEmptyIcon } from "./icons/StartEmptyIcon";
interface SkillProps {
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
        className={`${borderColor1} relative h-32 p-3 border-b-4  rounded-lg shadow `}
      >
        <div
          className={`absolute w-16 h-16 ${picSize} -mt-8 -ml-8 overflow-hidden ${backColor} border ${borderColor2} rounded-full`}
        >
          <Image
            src={pic}
            alt="Picture of the author"
            width={100}
            height={100}
          />
        </div>
        <p className="items-center my-4 text-lg font-hairline text-center text-gray-700 ">
          {title}
        </p>

        <div className="relative w-full h-1 my-10 text-gray-700 bg-gray-400 rounded ">
          <div className="absolute right-0 flex p-1 -mt-6 text-sm ">
            {degree >= 95 ? (
              [1, 2, 3, 4, 5].map((idx) => (
                <StarIcon
                  key={idx}
                  className="w-3 h-3 text-yellow-300 fill-current"
                />
              ))
            ) : degree >= 90 ? (
              <div className="flex ">
                {[1, 2, 3, 4].map((idx) => (
                  <StarIcon
                    key={idx}
                    className="w-3 h-3 text-yellow-300 fill-current"
                  />
                ))}
                <StartEmptyIcon className="w-3 h-3 text-yellow-300 fill-current" />
              </div>
            ) : (
              <div className="flex ">
                {[1, 2, 3].map((idx) => (
                  <StarIcon
                    key={idx}
                    className="w-3 h-3 text-yellow-300 fill-current"
                  />
                ))}
                {[1, 2].map((idx) => (
                  <StartEmptyIcon
                    key={idx}
                    className="w-3 h-3 text-yellow-300 fill-current"
                  />
                ))}
              </div>
            )}
          </div>

          <div
            className={` ${
              degree > 85
                ? degree > 90
                  ? degree > 95
                    ? "w-full"
                    : "w-11/12"
                  : "w-10/12"
                : "w-9/12"
            } absolute inset-0 h-1 rounded ${degreeColor} `}
          ></div>
        </div>
      </div>
    </div>
  );
};
