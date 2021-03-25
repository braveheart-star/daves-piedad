import { WorkHistory } from "../../components/WorkHistory";
import { Card } from "../../components/Card";

export default function Resume() {
  return (
    <Card className="relative">
      <div className="mb-12">
        <p className="font-mono text-xl font-bold text-gray-700 lg:text-2xl">
          Education History
        </p>
        <WorkHistory period="Apr. 2012 ~ Oct. 2016">
          <p className="my-4 font-serif text-lg text-gray-800 xl:w-4/6 lg:w-3/5 sm:text-xl lg:text-2xl lg:my-0">
            Dalian University
          </p>
          <p className="my-2 font-serif text-gray-600 lg:my-4 xl:w-4/6 lg:w-3/5 sm:text-base lg:text-lg ">
            ( Bachelor's degree, Mathematics and Computer Science)
          </p>
        </WorkHistory>
      </div>
      <div className="mb-8">
        <p className="font-mono text-xl font-bold text-gray-700 lg:text-2xl">
          Work History
        </p>
        <WorkHistory period="Apr. 2017 ~ Sep. 2018">
          <div className="">
            <p className="mt-4 font-serif text-lg text-gray-800 xl:w-4/6 lg:w-3/5 sm:text-xl lg:text-2xl lg:my-0">
              Hong Kong Kenxinda Technology Co., Ltd
            </p>
            <p className="my-2 font-serif text-base text-indigo-700 xl:w-4/6 lg:w-3/5 sm:text-lg lg:text-xl lg:my-0">
              (Local)
            </p>
          </div>

          <p className="my-3 font-serif text-gray-600 lg:my-4 xl:w-4/6 lg:w-3/5 sm:text-base lg:text-lg ">
            (Computer Engineer)
          </p>
        </WorkHistory>
        <WorkHistory period="Mar. 2017 ~ Jun. 2019">
          <p className="my-4 font-serif text-lg text-gray-800 xl:w-4/6 lg:w-3/5 sm:text-xl lg:text-2xl lg:my-0">
            Upwork.com
          </p>
          <p className="my-3 font-serif text-gray-600 lg:my-4 xl:w-4/6 lg:w-3/5 sm:text-base lg:text-lg ">
            (Full-Stack Web Developer)
          </p>
        </WorkHistory>
        <WorkHistory period="Aug. 2019 ~ Jan. 2020">
          <p className="my-4 font-serif text-lg text-gray-800 xl:w-4/6 lg:w-3/5 sm:text-xl lg:text-2xl lg:my-0">
            Guru.com
          </p>
          <p className="my-3 font-serif text-gray-600 lg:my-4 xl:w-4/6 lg:w-3/5 sm:text-base lg:text-lg ">
            (Front-End Web Developer)
          </p>
        </WorkHistory>
        <WorkHistory period="Apr. 2020 ~ Nov. 2020">
          <div>
            <p className="mt-4 font-serif text-lg text-gray-800 xl:w-4/6 lg:w-3/5 sm:text-xl lg:text-2xl lg:my-0">
              AlphaSwap Company
            </p>
            <p className="my-2 font-serif text-base text-indigo-700 xl:w-4/6 lg:w-3/5 sm:text-lg lg:text-xl lg:my-0">
              (remote)
            </p>
          </div>

          <p className="my-3 font-serif text-gray-600 lg:my-4 xl:w-4/6 lg:w-3/5 sm:text-base lg:text-lg ">
            (Full-Stack Web Developer)
          </p>
        </WorkHistory>
        <WorkHistory period="May. 2018 ~ Present">
          <div>
            <p className="mt-4 font-serif text-lg text-gray-800 xl:w-4/6 lg:w-3/5 sm:text-xl lg:text-2xl lg:my-0">
              Self Employed Web Developer
            </p>
            <p className="my-2 font-serif text-base text-indigo-700 xl:w-4/6 lg:w-3/5 sm:text-lg lg:text-xl lg:my-0">
              (remote)
            </p>
          </div>

          <p className="my-3 font-serif text-gray-600 lg:my-4 xl:w-4/6 lg:w-3/5 sm:text-base lg:text-lg ">
            (Full-Stack Developer)
          </p>
        </WorkHistory>
      </div>

      <div className="absolute bottom-0 right-0 mb-2 mr-2">
        <a href="./CV/CV2020-ShiXiong.pdf" target="_blank" download>
          <button className="bottom-auto p-2 text-white bg-green-400 border border-green-300 rounded-md shadow hover:bg-green-300 focus:outline-none">
            Download CV
          </button>
        </a>
        <span className="absolute top-0 right-0 flex w-3 h-3 -mt-1 -mr-1">
          <span className="absolute inline-flex w-full h-full bg-blue-400 rounded-full opacity-75 animate-ping" />
          <span className="relative inline-flex w-3 h-3 bg-blue-500 rounded-full" />
        </span>
      </div>
    </Card>
  );
}
