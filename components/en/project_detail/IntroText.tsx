import Link from "next/link";
import { useEffect, useState } from "react";
import {
  FaExternalLinkAlt,
  FaGithub,
  FaExclamationTriangle,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

interface IntroTextProps {
  firstParagraph: string;
  secondParagraph?: string;
  stackList: string[];
  link: string;
  sourceLink: string;
}

const variants = {
  initial: { x: "100vw" },
  animate: { x: 0 },
};

export default function IntroText({
  firstParagraph,
  secondParagraph,
  stackList,
  link,
  sourceLink,
}: IntroTextProps) {
  const [showAlert, setShowAlert] = useState<boolean>(false);

  useEffect(() => {
    document.addEventListener("click", (e) => {
      if (
        !(e.target as HTMLElement).closest("#visit-site-btn") &&
        !(e.target as HTMLElement).closest("#alert-box")
      ) {
        setShowAlert(false);
      }
    });
  }, []);

  return (
    <motion.div variants={variants} className="text-container mt-2 px-4 py-2">
      <p className="text-sm mb-2">{firstParagraph}</p>

      {secondParagraph && <p className="text-sm">{secondParagraph}</p>}

      <h4 className="font-black mt-3 mb-1 underline underline-offset-2">
        Stack
      </h4>

      <ul className="flex flex-wrap gap-x-3 gap-y-2">
        {stackList.map((stack, index) => (
          <li key={index} className="stack-ul-li">
            {stack}
          </li>
        ))}
      </ul>

      <div className="flex justify-evenly mt-5">
        <Link
          href={sourceLink}
          target="_blank"
          className="project-btn flex justify-center items-center gap-x-2 bg-cyan-200 px-2 py-1 rounded-2xl hover:scale-110 transition-transform"
        >
          <span className="mr-px hover:underline underline-offset-2">
            Source Code
          </span>
          <FaGithub className="size-4" />
        </Link>

        <div className="relative">
          <AnimatePresence>
            {showAlert && (
              <motion.div
                initial={{ scale: 0, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0, y: 20 }}
                id="alert-box"
                className="absolute right-[-30px] bottom-9 w-64 p-2 bg-sky-100 border-2 border-blue-600 rounded-2xl shadow-md shadow-gray-500 origin-bottom"
              >
                <div className="flex items-center gap-x-4 px-1">
                  <FaExclamationTriangle className="text-sky-500 size-16" />
                  <p className="text-xs  text-sky-600">
                    Serverless cold-start status may cause the site to not load
                    on the first entry. It will definitely open when the site is
                    loaded.
                  </p>
                </div>
                <Link
                  href={link}
                  target="_blank"
                  className="block w-16 mx-auto bg-sky-600 text-center text-gray-100 text-xs font-bold mt-3 p-1 rounded-lg"
                  onClick={() => setShowAlert(false)}
                >
                  Got it
                </Link>
              </motion.div>
            )}
          </AnimatePresence>
          <button
            id="visit-site-btn"
            className="project-btn flex justify-center items-center gap-x-2 bg-cyan-200 px-2 py-1 rounded-2xl hover:scale-110 transition-transform"
            onClick={(e) => {
              e.preventDefault();
              setShowAlert(true);
            }}
          >
            <span className="mr-px hover:underline underline-offset-2">
              Visit Site
            </span>
            <FaExternalLinkAlt className="size-3" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}
