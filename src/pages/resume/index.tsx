import { Card } from "../../components/Card";
import { WorkHistory } from "../../components/WorkHistory";

export default function Resume() {
  return (
    <Card>
      <div className="space-y-8">
        <div>
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
        <div className="space-y-4">
          <p className="font-mono text-xl font-bold text-gray-700 lg:text-2xl">
            Work History
          </p>
          <WorkHistory period="Oct. 2016 ~ Sep. 2019">
            <div>
              <p className="mt-4 font-serif text-lg text-gray-800 xl:w-4/6 lg:w-3/5 sm:text-xl lg:text-2xl lg:my-0">
                Hong Kong Kenxinda Technology Co., Ltd
              </p>
              <p className="my-2 font-serif text-base text-indigo-700 xl:w-4/6 lg:w-3/5 sm:text-lg lg:text-xl lg:my-0">
                (Local)
              </p>
            </div>

            <p className="my-3 font-serif text-gray-600 lg:my-4 xl:w-4/6 lg:w-3/5 sm:text-base lg:text-lg ">
              (Web Developer)
            </p>
          </WorkHistory>

          <WorkHistory period="Apr. 2019 ~ Nov. 2020">
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

          <WorkHistory period="Dec. 2020 ~ Mar. 2021">
            <div>
              <p className="mt-4 font-serif text-lg text-gray-800 xl:w-4/6 lg:w-3/5 sm:text-xl lg:text-2xl lg:my-0">
                SonicX Blockchain Foundation
              </p>
              <p className="my-2 font-serif text-base text-indigo-700 xl:w-4/6 lg:w-3/5 sm:text-lg lg:text-xl lg:my-0">
                (remote)
              </p>
            </div>

            <p className="my-3 font-serif text-gray-600 lg:my-4 xl:w-4/6 lg:w-3/5 sm:text-base lg:text-lg ">
              (Full-Stack Web Developer)
            </p>
          </WorkHistory>

          <WorkHistory period="Jan. 2021 ~ Apr. 2021">
            <div>
              <p className="mt-4 font-serif text-lg text-gray-800 xl:w-4/6 lg:w-3/5 sm:text-xl lg:text-2xl lg:my-0">
                Skills4school Company
              </p>
              <p className="my-2 font-serif text-base text-indigo-700 xl:w-4/6 lg:w-3/5 sm:text-lg lg:text-xl lg:my-0">
                (remote)
              </p>
            </div>

            <p className="my-3 font-serif text-gray-600 lg:my-4 xl:w-4/6 lg:w-3/5 sm:text-base lg:text-lg ">
              (Ionic Mobile Developer)
            </p>
          </WorkHistory>
          <WorkHistory period="Mar. 2021 ~ Aug. 2021">
            <div>
              <p className="mt-4 font-serif text-lg text-gray-800 xl:w-4/6 lg:w-3/5 sm:text-xl lg:text-2xl lg:my-0">
                Divizend Company
              </p>
              <p className="my-2 font-serif text-base text-indigo-700 xl:w-4/6 lg:w-3/5 sm:text-lg lg:text-xl lg:my-0">
                (remote)
              </p>
            </div>

            <p className="my-3 font-serif text-gray-600 lg:my-4 xl:w-4/6 lg:w-3/5 sm:text-base lg:text-lg ">
              (Full Stack Developer)
            </p>
          </WorkHistory>
        </div>
        <div>
          <a href="./CV/CV-2021.pdf" target="_blank" download>
            <button className="bottom-auto p-2 text-white bg-green-500 border border-green-300 rounded-md shadow hover:bg-green-400 focus:outline-none">
              Download CV
            </button>
          </a>
        </div>
      </div>
    </Card>
  );
}
