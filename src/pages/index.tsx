import { motion } from "framer-motion";
import React from "react";
import { Card } from "../components/Card";
import { CoderIcon, CodingIcon, ThinkerIcon } from "../components/icons";
import { ProjectItem } from "../components/ProjectItem";
import { Skill } from "../components/Skill";
import { projects } from "../utils/data";
import Image from "next/image";
import { EmailSend } from "../components/EmailSend";
import { Social } from "../components/Social";

export default function Home() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Card id="Home" className="relative">
        <div className="justify-between p-2 md:mx-6 md:flex ">
          <div className="flex flex-col w-full font-bold text-center md:w-3/5">
            <div className="flex items-center justify-center flex-1">
              <div className="">
                <p className="text-3xl leading-tight text-gray-800 sm:text-4xl xl:text-5xl ">
                  Full-Stack Developer
                </p>
                <p className="my-4 text-xl leading-tight text-green-600 sm:text-2xl xl:text-3xl md:my-8">
                  Welcome to my website !
                </p>
              </div>
            </div>
          </div>
          <div className="flex w-auto h-32 mx-auto">
            <CoderIcon className="w-full h-full " />
          </div>
        </div>
        <div className="my-6 lg:my-12 md:mx-12">
          <p className="text-gray-700 sm:text-lg lg:text-2xl">
            As a Full Stack Developer with 5 years of experience in software
            development, I’ve acquired a diverse set of skills with a main focus
            on JavaScript and its vast ecosystem.
          </p>
          <p className="text-gray-700 sm:text-lg lg:text-2xl">
            React and NodeJs are the main tools I use to create robust and
            modern web applications.
          </p>
          <p className="text-gray-700 sm:text-lg lg:text-2xl">
            The different kinds of projects I’ve contributed to led me to use
            lots of various technologies and taught me how to best adapt to new
            situations, whether technically or socially.
          </p>
        </div>
        <div className="justify-center mx-auto md:mt-16 md:flex">
          <ThinkerIcon className="w-5/6 h-32 py-2 mx-auto md:w-1/2" />
          <CodingIcon className="w-5/6 h-32 mx-auto my-2 md:w-1/2" />
        </div>
      </Card>
      <Card id="Projects">
        <p className="my-6 text-xl font-bold text-gray-800 sm:text-3xl md:text-4xl">
          Projects I have worked on:
        </p>

        {projects.map((item, idx) => {
          return <ProjectItem item={item} key={idx} />;
        })}
      </Card>

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
                  pic="/images/skills/js.jpg"
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
                  pic="/images/skills/py.jpg"
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
                  pic="/images/skills/ta.jpg"
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
                  pic="/images/skills/react.png"
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
                  pic="/images/skills/an.jpg"
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
                  pic="/images/skills/vue.png"
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
                  pic="/images/skills/ps.png"
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
                  pic="/images/skills/nest.jpg"
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
                  pic="/images/skills/docker.png"
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
                  pic="/images/skills/lara.png"
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

      <Card id="Contact" className="bg-white">
        <div>
          <p className="my-6 text-xl font-bold text-gray-800 sm:text-3xl md:text-4xl">
            Contact me:
          </p>
          <p className="text-sm text-gray-700 lg:m-6 sm:text-lg md:text-xl">
            I am always up for interesting ideas and projects. If you want to
            chat about any of the project I worked on, or have an interesting
            project or opportunity, feel free to get in touch!
          </p>
          <div className="my-4 mb-16">
            <EmailSend />
          </div>

          <div className="my-4">
            <div className="my-4 sm:flex">
              <p className="mx-3 text-base text-gray-600 md:text-lg">
                My Email:
              </p>
              <p className="flex justify-center text-base text-green-600 md:text-lg">
                <a href="mailto: lovelymouse115@gmail.com">
                  Send me an Email directly
                </a>
              </p>
            </div>
            <div>
              <Social />
            </div>
          </div>
        </div>
      </Card>
    </motion.main>
  );
}
