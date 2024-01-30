import { motion } from "framer-motion";
import { useState } from "react";
import SectionTitle from "./project_detail/SectionTitle";
import { IoMailOutline } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";

const mainVariants = {
  initial: { y: "100vh" },
  animate: { y: "0vh", transition: { duration: 1 } },
  exit: { y: "100vh", transition: { duration: 1 } },
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
      className="grid content-center h-screen"
    >
      <SectionTitle title="İletişim" altAnim={true} />

      <motion.div
        variants={pVariants}
        initial="initial"
        animate={animateValue}
        className="text-container mt-2 px-5 py-8"
      >
        <a
          href="mailto:tayfunemrekahraman@gmail.com"
          className="flex justify-center items-center gap-x-2 mb-2"
        >
          <IoMailOutline className="size-5" />
          <span className="text-sm font-medium text-cyan-600">
            tayfunemrekahraman@gmail.com
          </span>
        </a>

        <a
          href="https://www.linkedin.com/in/tayfun-kahraman-37b4861b0/"
          target="_blank"
          className="flex justify-center items-center gap-x-1 mb-4"
        >
          <FaLinkedin className="size-4" />
          <span className="font-medium text-cyan-600">LinkedIn</span>
        </a>

        <form
          action="https://formsubmit.co/tayfunemrekahraman@gmail.com"
          method="POST"
        >
          <fieldset>
            <legend>
              <label
                htmlFor="name"
                className="text-sm text-cyan-700 font-semibold"
              >
                Adınız
              </label>
            </legend>
            <input
              id="name"
              className="block w-full text-sm bg-white p-2 rounded-xl border-2 border-transparent focus:border-sky-400 outline-none transition-colors"
              type="text"
              name="name"
              required
            />
          </fieldset>

          <fieldset className="my-3">
            <legend>
              <label
                htmlFor="email"
                className="text-sm text-cyan-700 font-semibold"
              >
                E-mail adresiniz
              </label>
            </legend>
            <input
              id="email"
              className="block w-full text-sm bg-white p-2 rounded-xl border-2 border-transparent focus:border-sky-400 outline-none transition-colors"
              type="email"
              name="email"
              required
            />
          </fieldset>

          <fieldset>
            <legend>
              <label
                htmlFor="message"
                className="text-sm text-cyan-700 font-semibold"
              >
                Mesajınız
              </label>
            </legend>
            <textarea
              id="message"
              className="block w-full text-sm bg-white p-2 rounded-xl border-2 border-transparent focus:border-sky-400 outline-none transition-colors"
              name="message"
              rows={3}
              required
            />
          </fieldset>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="text-white mt-3 px-3 py-2 font-semibold bg-cyan-600 rounded-xl"
          >
            Gönder
          </motion.button>
        </form>
      </motion.div>
    </motion.main>
  );
}
