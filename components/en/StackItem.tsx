import { CgSandClock } from "react-icons/cg";
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type ItemProps = {
  id: number;
  name: string;
  src: string;
  alt: string;
  currentlyBeingLearned: boolean;
};

const articleVariants = {
  hidden: {
    scale: 0,
  },
  visible: {
    scale: 1,
  },
};

export default function Item({
  id,
  name,
  src,
  alt,
  currentlyBeingLearned,
}: ItemProps) {
  const [infoboxOpen, setInfoboxOpen] = useState<boolean>(false);

  return (
    <motion.article
      variants={articleVariants}
      whileHover={{ scale: 1.1 }}
      className="relative sm:w-24 sm:h-32 w-20 h-28 bg-black bg-opacity-30 rounded-lg"
      onMouseOver={() => setInfoboxOpen(true)}
      onMouseLeave={() => setInfoboxOpen(false)}
    >
      <AnimatePresence>
        {infoboxOpen && currentlyBeingLearned && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            className="absolute bottom-[135px] right-[-7px] w-28 infobox-text text-gray-700 bg-gray-100 p-1 rounded-lg"
          >
            Being Learned
          </motion.div>
        )}
      </AnimatePresence>

      {currentlyBeingLearned && (
        <CgSandClock
          className={`absolute md:left-[72px] left-16 text-gray-300 size-6 transition-all ${
            infoboxOpen ? "rotate-180" : "rotate-0"
          }`}
        />
      )}

      <div className="h-[5rem] grid place-content-center">
        <Image
          className={`mx-auto w-auto rounded-md sm:size-14 size-10 ${
            currentlyBeingLearned && "opacity-50"
          }`}
          src={`/technologies/${src}.webp`}
          width={50}
          height={50}
          alt={alt}
        />
      </div>
      <h3
        className={`absolute bottom-3 w-full stack-text text-center text-gray-100 ${
          currentlyBeingLearned && "opacity-50"
        }`}
      >
        {name}
      </h3>
    </motion.article>
  );
}
