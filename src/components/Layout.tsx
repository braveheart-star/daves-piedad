import Head from "next/head";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { motion } from "framer-motion";
import { LinkedinIcon, DiscordIcon, GitIcon, SkypeIcon } from "./icons";

export const Layout = ({ children, title = "portfolio" }: any) => {
  return (
    <div>
      {renderSide()}
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="relative flex flex-col w-full min-h-screen bg-gray-100 APP">
        <Header />
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="my-24 md:my-32"> {children}</div>
          <Footer />
        </motion.main>
      </div>
    </div>
  );
};

function renderSide() {
  return (
    <div className="fixed z-20 flex min-h-screen right-6 sm:right-10">
      <div className="m-auto space-y-2">
        <div className="w-8 h-8 lg:w-11 lg:h-11">
          <a
            href="https://www.linkedin.com/in/shixionghan/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedinIcon className="w-full h-full text-green-500 fill-current" />
          </a>
        </div>
        <div className="w-8 h-8 lg:w-11 lg:h-11">
          <a
            href="https://join.skype.com/invite/WgfsE3Xvlhwx"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SkypeIcon className="w-full h-full text-green-500 fill-current" />
          </a>
        </div>
        <div className="w-8 h-8 lg:w-11 lg:h-11">
          <a
            href="https://github.com/braveheart-star"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitIcon className="w-full h-full text-green-500 fill-current" />
          </a>
        </div>
        <div className="w-9 h-9 lg:w-12 lg:h-12">
          <a
            href="https://discord.gg/SjhcpdQZ"
            target="_blank"
            rel="noopener noreferrer"
          >
            <DiscordIcon className="w-full h-full text-green-500 fill-current" />
          </a>
        </div>
      </div>
    </div>
  );
}
