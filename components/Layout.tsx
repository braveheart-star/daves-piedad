import React from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { motion } from "framer-motion";

interface LayoutProps {
  children: any;
  slim?: boolean;
}

export const Layout = (props: LayoutProps) => {
  return (
    <div className="relative flex flex-col w-full min-h-screen bg-back-gray APP">
      <Header />
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div className="my-24 md:my-32"> {props.children}</div>
        <Footer />
      </motion.main>
    </div>
  );
};
