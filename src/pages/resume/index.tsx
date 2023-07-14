import Link from "next/link";
import { Card } from "../../components/Card";
import { AlphaSwap } from "../../components/icons/projects/AlphaSwap";
import { Divizend } from "../../components/icons/projects/Divizend";
import { TrackApp } from "../../components/icons/projects/TrackApp";
import { History } from "../../components/History";

export default function Resume() {
  const educationHistory = [
    {
      period: "Apr. 2012 ~ Oct. 2016",
      company: "Dalian University",
      other: "Bachelor's degree, Mathematics and Computer Science",
      dot: <img className="w-10" src="university.png" />,
    },
  ];

  const workHistory = [
    {
      period: "Apr. 2019 ~ Nov. 2020",
      company: "AlphaSwap",
      other: "Full-Stack Developer",
      dot: (
        <Link href="https://app.alphaswap.io/" passHref>
          <AlphaSwap className="w-12 h-12" />
        </Link>
      ),
    },
    {
      period: "Dec. 2020 ~ Aug. 2021",
      company: "Divizend",
      other: "Frontend Developer",
      dot: (
        <Link href="https://divizend.com/en/" passHref>
          <Divizend />
        </Link>
      ),
    },
    {
      period: "Oct. 2021 ~ July. 2022",
      company: "GiftCash",
      other: "Full-Stack Developer",
      dot: (
        <Link href="https://www.giftcash.com/" passHref>
          <img className="w-10" src="gc-logo-square.svg" />
        </Link>
      ),
    },
    {
      period: "Apr. 2021 ~ Dec. 2021",
      company: "The Track App",
      other: "Senior Frontend Developer",
      dot: (
        <Link href="https://thetrackapp.com/" passHref>
          <TrackApp />
        </Link>
      ),
    },
    {
      period: "Apr. 2021 ~ ",
      company: "Pillar Company",
      other: "Senior Frontend Developer",
      dot: (
        <Link href="https://www.pillarmarkets.com/" passHref>
          <TrackApp />
        </Link>
      ),
    },
  ];
  return (
    <Card>
      <div className="space-y-8">
        <div className="space-y-8 ">
          <div className="flex items-center space-x-2 ">
            <i className="ri-government-line"></i>
            <p className="font-mono text-xl font-bold text-gray-700 md:text-2xl">
              Education History
            </p>
          </div>
          <div className="pl-8 ">
            <History histories={educationHistory} />
          </div>
        </div>
        <div className="space-y-8 ">
          <div className="flex items-center space-x-2 ">
            <i className="ri-time-line"></i>

            <p className="font-mono text-xl font-bold text-gray-700 md:text-2xl">
              Work History
            </p>
          </div>

          <div className="pl-8 ">
            <History histories={workHistory} />
          </div>
        </div>
        <div className="flex justify-between ">
          <div></div>
          <a href="./CV/cv-2023.pdf" target="_blank" download>
            <button className="bottom-auto p-2 text-white border rounded-md shadow border-cyan-300 bg-cyan-500 hover:bg-cyan-400 focus:outline-none">
              Download CV
            </button>
          </a>
        </div>
      </div>
    </Card>
  );
}
