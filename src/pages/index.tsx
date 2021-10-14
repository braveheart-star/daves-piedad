import React, { useEffect } from "react";
import Image from "next/image";
import AddChat from "../utils/tawkto";
import { projects, recommend } from "../utils/data";

import { Card } from "../components/Card";
import { Skill } from "../components/Skill";
import { EmailSend } from "../components/EmailSend";
import { ProjectItem } from "../components/ProjectItem";
import { RecommendDetail } from "../components/RecommendDetail";
import { CoderIcon, CodingIcon, ThinkerIcon } from "../components/icons";

export default function Home() {
  useEffect(() => {
    window.Tawk_API?.showWidget();
    AddChat();
    // eslint-disable-next-line
  }, []);
  return (
    <div className="space-y-4 lg:space-y-8 ">
      <Card id="Home">
        <div className="grid items-center gap-4 sm:grid-cols-7">
          <div className="space-y-2 font-bold text-center lg:space-y-4 sm:col-span-4">
            <p className="text-3xl text-gray-800 sm:text-4xl xl:text-5xl ">
              Full-Stack Developer
            </p>
            <p className="text-2xl text-transparent uppercase bg-clip-text bg-gradient-to-r from-yellow-400 via-pink-400 to-red-500 sm:text-2xl xl:text-4xl ">
              welcome to my site
            </p>
          </div>
          <div className="sm:col-span-3">
            <CoderIcon className="w-full h-48 " />
          </div>
        </div>
        <div className="my-6 space-y-2 lg:my-12 md:mx-12">
          <p className="text-gray-700 sm:text-lg lg:text-2xl">
            As a Full Stack Developer with 7 years of experience in software
            development, I’ve acquired a diverse set of skills with a main focus
            on JavaScript and its vast ecosystem.
          </p>

          <p className="text-gray-700 sm:text-lg lg:text-2xl">
            The different kind of projects I've worked with in the past has led
            me to used lots of various technologies and taught me how to best
            adapt to new situations, whether technically or socially.
          </p>
        </div>
        <div className="hidden grid-cols-2 gap-4 sm:grid ">
          <div className="h-40 p-4 lg:h-48 ">
            <ThinkerIcon className="w-full h-full " />
          </div>
          <div className="h-40 p-4 lg:h-48 ">
            <CodingIcon className="w-full h-full " />
          </div>
        </div>
      </Card>
      <Card id="Projects">
        <p className="title">Projects I have worked on:</p>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 ">
          {projects.map((item, idx) => (
            <ProjectItem item={item} key={idx} />
          ))}
        </div>
      </Card>
      <Card id="About">
        <div className="items-center lg:flex">
          <p className=" title">Get to know me:</p>
          <p className="text-lg font-bold text-green-500 lg:m-6 sm:text-xl md:text-2xl">
            ShiXiong(世雄) Han(韩)
          </p>
        </div>
        <div className="items-center my-8 lg:my-12 lg:flex lg:justify-around">
          <div className="overflow-hidden border-2 border-blue-200 rounded-full w-28 h-28 lg:w-36 lg:h-36 ">
            <div className="object-cover object-center w-full h-full mx-auto rounded">
              <Image
                src="/images/photo/picture.jpg"
                alt="Picture of the author"
                width={400}
                height={400}
              />
            </div>
          </div>
          <div className="my-8 xl:w-4/6 lg:w-3/5 lg:my-0">
            <p className="font-serif text-gray-700 sm:text-lg lg:text-xl">
              My name is ShiXiong Han.
              <span className="block">
                I'm a senior web developer based in Dalian, China with a focus in
                building beautiful and well-structured web site using modern
                technologies.
              </span>
              <span className="block">I'm open to work at any time zone.</span>
            </p>
          </div>
        </div>
        <div className="space-y-8 ">
          <p className="font-mono text-xl font-bold text-gray-700 lg:text-2xl">
            Main Skills
          </p>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 gap-y-6">
            <Skill
              borderColor1="border-yellow-400 "
              borderColor2="border-yellow-200"
              backColor="bg-yellow-100"
              pic="/images/skills/js.jpg"
              picSize="p-2"
              title="JS/TS"
              degree={96}
              degreeColor="bg-blue-400"
            />
            <Skill
              borderColor1="border-indigo-500 "
              borderColor2="border-indigo-300"
              backColor="bg-indigo-200"
              pic="/images/skills/py.jpg"
              picSize="p-1"
              title="Python/DJ"
              degree={91}
              degreeColor="bg-green-400"
            />
            <Skill
              borderColor1="border-green-500 "
              borderColor2="border-green-300"
              backColor="bg-green-200"
              pic="/images/skills/ta.jpg"
              picSize="p-3"
              title="Tailwind CSS"
              degree={99}
              degreeColor="bg-pink-400"
            />
            <Skill
              borderColor1="border-blue-400 "
              borderColor2="border-blue-300"
              backColor="bg-white"
              pic="/images/skills/react.png"
              picSize="p-2"
              title="React/Next"
              degree={100}
              degreeColor="bg-purple-400"
            />
            <Skill
              borderColor1="border-red-500 "
              borderColor2="border-red-300"
              backColor="bg-red-200"
              pic="/images/skills/an.jpg"
              picSize="p-1"
              title="Angular"
              degree={93}
              degreeColor="bg-indigo-400"
            />
            <Skill
              borderColor1="border-green-400 "
              borderColor2="border-green-200"
              backColor="bg-white"
              pic="/images/skills/vue.png"
              picSize="p-2"
              title="Vue/Nuxt"
              degree={93}
              degreeColor="bg-yellow-400"
            />
            <Skill
              borderColor1="border-yellow-500 "
              borderColor2="border-blue-300"
              backColor="bg-blue-100"
              pic="/images/skills/ps.png"
              picSize="p-2"
              title="PostgreSQL"
              degree={93}
              degreeColor="bg-green-400"
            />
            <Skill
              borderColor1="border-pink-500 "
              borderColor2="border-pink-300"
              backColor="bg-pink-200"
              pic="/images/skills/nest.jpg"
              picSize="p-3"
              title="Nest(node.js)"
              degree={94}
              degreeColor="bg-yellow-400"
            />
            <Skill
              borderColor1="border-blue-500 "
              borderColor2="border-indigo-300"
              backColor="bg-white"
              pic="/images/skills/docker.png"
              picSize="p-2"
              title="Docker"
              degree={86}
              degreeColor="bg-red-400"
            />
            <Skill
              borderColor1="border-yellow-500 "
              borderColor2="border-yellow-300"
              backColor="bg-yellow-100"
              pic="/images/skills/lara.png"
              picSize="p-2"
              title="PHP/Laravel"
              degree={88}
              degreeColor="bg-indigo-400"
            />
          </div>
        </div>
      </Card>
      <Card id="Recommend">
        <p className="title">Recommendations:</p>
        <div className="divide-y md:mt-10">
          {recommend.map((item, idx) => (
            <RecommendDetail item={item} key={idx} />
          ))}
        </div>
      </Card>
      <Card id="Contact">
        <p className="title">Contact me:</p>
        <div className="text-sm text-gray-700 lg:text-lg sm:text-base">
          <p>I'm always up for interesting ideas and projects.</p>
          <p>
            If you want to talk about any of the projects I have worked on, or
            want to work with a project with me, feel free to get in touch!
          </p>
        </div>

        <div className="my-4 mb-16">
          <EmailSend />
        </div>

        <div className="my-4">
          <div className="my-4 sm:flex">
            <p className="text-base text-teal-600 md:text-lg">
              <a href="mailto: lovelymouse115@gmail.com ">Email Me Directly</a>
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
}
