import React from "react";
import { motion } from "framer-motion";
import { Card } from "./Card";
import { ProjectItem } from "./ProjectItem";

const projects = [
  {
    siteUrl: "https://caltechcasino.com/",
    role: "Front-End Developer",
    techStack: "React-Redux, React-hook, TypeScript, Smart Contractor, ",
    siteName: "SonicX Foundation / CaltechCasino",
    img: "projects/caltech.jpg",
    description: `
    I built this site using React-Redux , TypeScript, React-hook.
    `,
    period: {
      year: "-2021",
      month: "12 ~ 1",
    },
  },
  {
    siteUrl: "https://www.alphaswap.io/about-us",
    role: "Full-Stack Developer",
    techStack:
      "React-Redux, Node.js ( Nest.js ), easy-peasy library, postgreSQL, Docker",
    siteName: "AlphaSwap Company",
    img: "projects/alphaswap1.jpg",
    description: `
    I have worked as a full-stack developer in AlphaSwap company.
    I built UI using React-Redux and implemented the functionality of the investment idea.
    `,
    period: {
      year: "2020",
      month: "4 ~ 11",
    },
  },

  {
    siteUrl: "https://www.workwelltogether.co/",
    role: "Full-Stack Developer",
    techStack: "Django, React, PostgreSQL",
    siteName: "Workwelltogether",
    img: "projects/work.jpg",
    description: `
   I built this site using React for frontend, Django for backend
    `,
    period: {
      year: "2020",
      month: "9 ~ 11",
    },
  },

  {
    siteUrl: "https://canvas-animation-muscular.herokuapp.com/",
    role: "CSS developer",
    techStack: "CSS",
    siteName: "animation css",
    img: "projects/css.jpg",
    description: `
   CSS fully animation
    `,
    period: {
      year: "2020",
      month: "4 ~ 5",
    },
  },

  {
    siteUrl: "https://staging.chinesepod.com/",
    role: "Front-End Developer",
    techStack: "Vue.js, Node.js",
    siteName: "Chinesepod",
    img: "projects/chinese.jpg",

    description: `I worked as a front end developer using vue.js with another developer as team contributor.`,
    period: {
      year: "2019",
      month: "7 ~ 8",
    },
  },

  {
    siteUrl: "https://www.msgsafe.io/",
    role: "React Native Developer",
    techStack: "React Native, Firebase",
    siteName: "msgsafe",
    img: "projects/native.jpg",
    description: `I worked as a React Native developer with another developer.`,
    period: {
      year: "2018",
      month: "8 ~ 12",
    },
  },

  {
    siteUrl: "https://portal.cdm.rosetta-technology.io/",
    role: "Front-End Developer",
    techStack: "Angular 7+, CSS animations, Azure DevOps, Microsoft Teams",
    siteName: "Rosetta Technology",
    img: "projects/rosetta.jpg",

    description: `I worked as a front end developer with another developer as team contributor.`,
    period: {
      year: "2018",
      month: "3 ~ 8",
    },
  },
  {
    siteUrl: "https://theracingmanager.com/",
    role: "Back-End Developer",
    siteName: "Racing Management",
    description:
      "I worked on this project for about 3 months as a backend developer.",
    img: "projects/racing.jpg",

    period: {
      year: "2017",
      month: "5 ~ 8",
    },
    techStack:
      "Node.js ( express ), React, AWS Amplify, Cognito, API Gateway, Lambdas, Serverless Architecture",
  },

  {
    siteUrl: "https://prod-land.herokuapp.com/",
    role: "Front-End Developer",
    siteName: "Production Landing",
    description: `Production Landing Page was built based on React,
     styled-component, framer-motion basically.
      This kind of website should be used for Blog page, production store website,
       individual portfolio website or shoping page, etc.
    `,
    techStack: "React",
    img: "projects/production.jpg",

    period: {
      year: "2020",
      month: "10 ~ 11",
    },
  },

  {
    siteUrl: "https://threejs-svg-designer.herokuapp.com/",
    role: "JavaScript Developer",
    siteName: "Glass Design",
    description: `I got this project on the Upwork when I worked as a freelancer.
    The requirements is that implementing any kind of glass manipulation design by drawing that in the SVG, Canvas.
    `,
    techStack: "JavaScript, jQuery, SVG, Canvas",
    img: "projects/svg.jpg",
    period: {
      year: "2020",
      month: "3 ~ 6",
    },
  },
];

export const Project = () => {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Card id="Projects">
        <p className="my-6 text-xl font-bold text-gray-800 sm:text-3xl md:text-4xl">
          Projects I have worked on:
        </p>

        {projects.map((item, idx) => {
          return <ProjectItem item={item} key={idx} />;
        })}
      </Card>
    </motion.main>
  );
};
