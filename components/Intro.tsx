import { motion } from "framer-motion";
import { useState } from "react";

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

export default function Intro({ pageId }: { pageId: number }) {
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
      <motion.img
        variants={imgVariants}
        initial="initial"
        animate={animateValue}
        src="/black-sweat-sm.svg"
        className="bg-white self-end justify-self-end p-4 rounded-2xl"
        alt="illustration"
      />

      <motion.div
        variants={h1Variants}
        initial="initial"
        animate={animateValue}
        className="col-span-2 bg-white self-end rounded-2xl"
      >
        <h1 className="text-4xl font-black py-5 px-3">Merhaba!</h1>
      </motion.div>

      <motion.div
        variants={pVariants}
        initial="initial"
        animate={animateValue}
        className="bg-white self-start col-span-3 rounded-2xl"
      >
        <p className="text-lg p-3">
          Ben Tayfun. Junior seviye{" "}
          <span className="text-blue-600 font-black">Full-stack</span>{" "}
          geliştiriciyim. Aslında eskiden Java ve C# kullanıyordum fakat artık
          tamamen Javascript/Typescript ile ilgileniyorum ve web uygulamaları
          geliştiriyorum.
        </p>
      </motion.div>
    </motion.main>
  );
}
