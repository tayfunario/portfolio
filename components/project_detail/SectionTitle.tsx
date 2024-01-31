import { motion } from "framer-motion";

const variants = {
  initial: { x: 1000 },
  animate: { x: 0 },
};

const variants2 = {
  initial: { x: "100vw" },
  animate: { x: 0, transition: { delay: 0.5 } },
};

export default function SectionTitle({
  title,
  altAnim,
}: {
  title: string;
  altAnim?: boolean;
}) {
  return (
    <motion.h3
      variants={altAnim ? variants2 : variants}
      className="third-title text-container w-3/4 mt-7 px-4 py-2"
    >
      {title}
    </motion.h3>
  );
}
