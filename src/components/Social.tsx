import React from "react";
import { LinkedinIcon, SkypeIcon, GitIcon, DiscordIcon } from "./icons";

export const Social = () => {
  return (
    <div className="items-center my-4 sm:flex sm:justify-center ">
      <div className="w-10 h-10 mx-auto my-3 lg:w-12 lg:h-12 sm:mx-4">
        <a
          href="https://www.linkedin.com/in/shixionghan/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedinIcon className="w-full h-full text-green-500 fill-current" />
        </a>
      </div>
      <div className="w-10 h-10 mx-auto my-3 lg:w-12 lg:h-12 sm:mx-4">
        <a
          href="https://join.skype.com/invite/WgfsE3Xvlhwx"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SkypeIcon className="w-full h-full text-green-500 fill-current" />
        </a>
      </div>
      <div className="w-10 h-10 mx-auto my-3 lg:w-12 lg:h-12 sm:mx-4">
        <a
          href="https://github.com/braveheart-star"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitIcon className="w-full h-full text-green-500 fill-current" />
        </a>
      </div>
      <div className="w-10 h-10 mx-auto my-3 lg:w-12 lg:h-12 sm:mx-4">
        <a
          href="https://discord.gg/JBmawd6u"
          target="_blank"
          rel="noopener noreferrer"
        >
          <DiscordIcon className="w-full h-full text-green-500 fill-current" />
        </a>
      </div>
    </div>
  );
};
