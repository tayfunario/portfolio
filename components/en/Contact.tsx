import { motion } from "framer-motion";
import { useState } from "react";
import SectionTitle from "../project_detail/SectionTitle";
import { IoMailOutline } from "react-icons/io5";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const mainVariants = {
  initial: { y: "100vh" },
  animate: { y: "0vh", transition: { duration: 1 } },
  exit: { y: "100vh", transition: { duration: 1 } },
};

const divVariants = {
  initial: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  initial: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function Contact() {
  const [animateValue, setAnimateValue] = useState<string>("null");
  return (
    <motion.main
      variants={mainVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 1 }}
      onAnimationComplete={() => setAnimateValue("visible")}
      className="grid content-center h-svh"
    >
      <SectionTitle title="Contact" />

      <motion.div
        variants={divVariants}
        initial="initial"
        animate={animateValue}
        className="text-container mt-2 px-5 py-8"
      >
        <motion.a
          variants={itemVariants}
          href="mailto:tayfunemrekahraman@gmail.com"
          className="flex justify-center items-center gap-x-2 mb-2"
        >
          <IoMailOutline className="size-5" />
          <span className="text-sm font-medium text-cyan-600">
            tayfunemrekahraman@gmail.com
          </span>
        </motion.a>

        <motion.a
          variants={itemVariants}
          href="https://www.linkedin.com/in/tayfun-kahraman-37b4861b0/"
          target="_blank"
          className="flex justify-center items-center gap-x-1 mb-2"
        >
          <FaLinkedin className="size-4" />
          <span className="font-medium text-cyan-600">LinkedIn</span>
        </motion.a>
        <motion.a
          variants={itemVariants}
          href="https://github.com/tayfunetta?tab=repositories"
          target="_blank"
          className="flex justify-center items-center gap-x-1 mb-4"
        >
          <FaGithub className="size-4" />
          <span className="font-medium text-cyan-600">Github</span>
        </motion.a>

        <form
          action="https://formsubmit.co/tayfunemrekahraman@gmail.com"
          method="POST"
        >
          <motion.fieldset variants={itemVariants}>
            <legend>
              <label
                htmlFor="name"
                className="text-sm text-cyan-700 font-semibold"
              >
                Your Name
              </label>
            </legend>
            <input
              id="name"
              className="block w-full text-sm bg-white p-2 rounded-xl border-2 border-transparent focus:border-sky-400 outline-none transition-colors"
              type="text"
              name="name"
              required
            />
          </motion.fieldset>

          <motion.fieldset variants={itemVariants} className="my-3">
            <legend>
              <label
                htmlFor="email"
                className="text-sm text-cyan-700 font-semibold"
              >
                Your E-mail
              </label>
            </legend>
            <input
              id="email"
              className="block w-full text-sm bg-white p-2 rounded-xl border-2 border-transparent focus:border-sky-400 outline-none transition-colors"
              type="email"
              name="email"
              required
            />
          </motion.fieldset>

          <motion.fieldset variants={itemVariants}>
            <legend>
              <label
                htmlFor="message"
                className="text-sm text-cyan-700 font-semibold"
              >
                Your Message
              </label>
            </legend>
            <textarea
              id="message"
              className="block w-full text-sm bg-white p-2 rounded-xl border-2 border-transparent focus:border-sky-400 outline-none transition-colors"
              name="message"
              rows={3}
              required
            />
          </motion.fieldset>
          <motion.button
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="text-white mt-3 px-3 py-2 font-semibold bg-cyan-600 rounded-xl"
          >
            Send
          </motion.button>
        </form>
      </motion.div>
    </motion.main>
  );
}
