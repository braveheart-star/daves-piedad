import React from "react";
import Image from "next/image";
import "./index.css";

const imageToRender = [
  "/images/photo/picture.jpg",
  "/images/skills/js.jpg",
  "/images/skills/py.jpg",
  "/images/skills/ta.jpg",
  "/images/skills/an.jpg",
  "/images/skills/react.jpg",
  "/images/skills/nest.jpg",
  "/images/skills/vue.jpg",
  "/images/skills/ps.jpg",
  "/images/skills/docker.jpg",
  "/images/skills/lara.jpg",
];

import { Skill } from "./Skill";
import { Card } from "./Card";
import { motion } from "framer-motion";

export const About = () => {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Card id="About">
        <div className="lg:flex">
          <p className="my-6 text-xl font-bold text-gray-800 sm:text-3xl md:text-4xl">
            Get to know me:
          </p>
          <p className="text-lg font-bold text-green-500 lg:m-6 sm:text-2xl md:text-3xl">
            ShiXiong(世雄) Han(韩)
          </p>
        </div>
        <div className="items-center my-8 lg:my-12 lg:flex lg:justify-around">
          <div className="w-40 h-40 overflow-hidden border-2 border-blue-200 rounded-full ">
            <Image
              src={imageToRender[0]}
              alt="Picture of the author"
              width={500}
              height={500}
              className="object-cover object-center w-full h-full mx-auto rounded"
            />
          </div>
          <div className="my-8 xl:w-4/6 lg:w-3/5 lg:my-0">
            <p className="font-serif text-gray-700 sm:text-lg lg:text-xl">
              My name is ShiXiong Han, from Hong Kong, a senior web developer,
              who has worked for web developments since 2015.
            </p>
            <p className="my-2 font-serif text-gray-700 sm:text-lg lg:text-xl">
              As a professional web developer, I love building creative ,
              beautiful , well-structured web site using modern-set
              technologies.
            </p>
            <p className="my-2 font-serif text-gray-700 sm:text-lg lg:text-xl">
              I can start working immediately at any time zone.
            </p>
          </div>
        </div>
        <div>
          <p className="font-mono text-xl font-bold text-gray-700 lg:text-2xl">
            Main Skills
          </p>
          <div className="my-6 ">
            <div className="justify-around w-full md:flex md:my-4">
              <div className="my-3 ">
                <Skill
                  borderColor1="border-yellow-400 "
                  borderColor2="border-yellow-200"
                  backColor="bg-yellow-100"
                  pic={js}
                  picSize="p-2"
                  title="JS/TS"
                  degree={96}
                  degreeColor="bg-blue-400"
                />
              </div>
              <div className="my-3 ">
                <Skill
                  borderColor1="border-indigo-500 "
                  borderColor2="border-indigo-300"
                  backColor="bg-indigo-200"
                  pic={py}
                  picSize="p-1"
                  title="Python/DJ"
                  degree={91}
                  degreeColor="bg-green-400"
                />
              </div>
              <div className="my-3 ">
                <Skill
                  borderColor1="border-green-500 "
                  borderColor2="border-green-300"
                  backColor="bg-green-200"
                  pic={ta}
                  picSize="p-3"
                  title="Tailwind CSS"
                  degree={98}
                  degreeColor="bg-pink-400"
                />
              </div>
            </div>

            <div className="justify-around w-full md:flex md:my-4">
              <div className="my-3 ">
                <Skill
                  borderColor1="border-blue-400 "
                  borderColor2="border-blue-300"
                  backColor="bg-white"
                  pic={re}
                  picSize="p-2"
                  title="React/Next"
                  degree={99}
                  degreeColor="bg-purple-400"
                />
              </div>
              <div className="my-3">
                <Skill
                  borderColor1="border-red-500 "
                  borderColor2="border-red-300"
                  backColor="bg-red-200"
                  pic={an}
                  picSize="p-1"
                  title="Angular"
                  degree={95}
                  degreeColor="bg-indigo-400"
                />
              </div>
              <div className="my-3">
                <Skill
                  borderColor1="border-green-400 "
                  borderColor2="border-green-200"
                  backColor="bg-white"
                  pic={vue}
                  picSize="p-2"
                  title="Vue/Nuxt"
                  degree={93}
                  degreeColor="bg-yellow-400"
                />
              </div>
            </div>

            <div className="justify-around w-full md:flex md:my-4">
              <div className="my-3 ">
                <Skill
                  borderColor1="border-yellow-500 "
                  borderColor2="border-blue-300"
                  backColor="bg-blue-100"
                  pic={psql}
                  picSize="p-2"
                  title="PostgreSQL"
                  degree={93}
                  degreeColor="bg-green-400"
                />
              </div>
              <div className="my-3 ">
                <Skill
                  borderColor1="border-pink-500 "
                  borderColor2="border-pink-300"
                  backColor="bg-pink-200"
                  pic={nest}
                  picSize="p-3"
                  title="Nest(node.js)"
                  degree={94}
                  degreeColor="bg-yellow-400"
                />
              </div>
              <div className="my-3 ">
                <Skill
                  borderColor1="border-blue-500 "
                  borderColor2="border-indigo-300"
                  backColor="bg-white"
                  pic={docker}
                  picSize="p-2"
                  title="Docker"
                  degree={89}
                  degreeColor="bg-red-400"
                />
              </div>
            </div>

            <div className="justify-around w-full md:flex md:my-4">
              <div className="my-3 ">
                <Skill
                  borderColor1="border-yellow-500 "
                  borderColor2="border-yellow-300"
                  backColor="bg-yellow-100"
                  pic={laravel}
                  picSize="p-2"
                  title="PHP/Laravel"
                  degree={91}
                  degreeColor="bg-indigo-400"
                />
              </div>
            </div>
          </div>
        </div>
      </Card>
    </motion.main>
  );
};
