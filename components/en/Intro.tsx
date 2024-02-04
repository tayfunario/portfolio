import { motion } from "framer-motion";
import { useState } from "react";
import LanguageSwitch from "../LanguageSwitch";

const imgVariants = {
  initial: {
    scale: 0,
    borderRadius: "50%",
  },
  visible: {
    scale: 1,
    borderRadius: "16px",
    transition: {
      type: "spring",
      mass: 0.1,
    },
  },
};

const h1Variants = {
  initial: {
    x: 50,
  },
  visible: {
    x: 0,
    transition: {
      type: "spring",
      mass: 0.1,
    },
  },
};

const pVariants = {
  initial: {
    y: 100,
  },
  visible: {
    y: 0,
    transition: {
      type: "spring",
      mass: 0.1,
    },
  },
};

export default function Intro() {
  const [animateValue, setAnimateValue] = useState<string>("null");

  return (
    <motion.main
      initial={{ y: "-100vh" }}
      animate={{ y: "0vh" }}
      exit={{ y: "-100vh" }}
      transition={{ duration: 1 }}
      onAnimationComplete={() => setAnimateValue("visible")}
      className="w-full grid grid-cols-3 grid-rows-2 gap-3 h-screen"
    >
      <LanguageSwitch initialLanguage="en" />

      <motion.img
        variants={imgVariants}
        initial="initial"
        animate={animateValue}
        src="/black-sweat-sm.svg"
        className="text-container self-end justify-self-end p-4"
        alt="illustration"
      />

      <motion.h1
        variants={h1Variants}
        initial="initial"
        animate={animateValue}
        className="main-title text-container inline self-end py-5 px-3"
      >
        Hi!
      </motion.h1>

      <motion.div
        variants={pVariants}
        initial="initial"
        animate={animateValue}
        className="text-container self-start col-span-3"
      >
        <p className="copy-1 p-3">
          I'm Tayfun. I'm 21 years old. I live in Istanbul/Kocaeli. I'm a Junior
          <span className="text-gradient-end font-black"> Full-stack</span>{" "}
          developer. I started coding at the age of 15 with C++. Then I learned
          C# and Java in order and dealt with them a bit. Then I fell into the
          delusion that these languages were useless and stopped using them (my
          biggest regret :D). Now I develop web applications using
          Javascript/Typescript.
        </p>
      </motion.div>
    </motion.main>
  );
}
