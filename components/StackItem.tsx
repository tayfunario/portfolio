import { CgSandClock } from "react-icons/cg";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type ItemProps = {
  id: number;
  name: string;
  src: string;
  alt: string;
  currentlyBeingLearned: boolean;
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
    <article
      className={`relative w-24 h-32 bg-black bg-opacity-30 rounded-lg hover:scale-110 transition-transform`}
      onMouseOver={() => setInfoboxOpen(true)}
      onMouseLeave={() => setInfoboxOpen(false)}
    >
      <AnimatePresence>
        {infoboxOpen && currentlyBeingLearned && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            className="absolute bottom-[135px] right-[-7px] w-28 text-xs font-semibold text-gray-700 bg-gray-100 p-1 rounded-lg"
          >
            Öğrenmekteyim
          </motion.div>
        )}
      </AnimatePresence>

      {currentlyBeingLearned && (
        <CgSandClock
          className={`absolute bottom-[108px] left-[72px] text-gray-300 size-6 transition-all ${
            infoboxOpen ? "rotate-180" : "rotate-0"
          }`}
        />
      )}

      <div className="h-[5.5rem] grid place-content-center">
        <Image
          className={`mx-auto rounded-md ${
            currentlyBeingLearned && "opacity-50"
          }`}
          src={`/technologies/${src}.webp`}
          width={60}
          height={60}
          alt={alt}
        />
      </div>
      <h3
        className={`absolute bottom-3 w-full font-semibold text-sm text-center text-gray-100 ${
          currentlyBeingLearned && "opacity-50"
        }`}
      >
        {name}
      </h3>
    </article>
  );
}
