import React from "react";
import { Card } from "./Card";
import { EmailSend } from "./EmailSend";
import { Social } from "./Social";
import { motion } from "framer-motion";

export const Contact = () => {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 2 }}
      exit={{ opacity: 0 }}
    >
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
};
