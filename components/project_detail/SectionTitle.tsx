import { motion } from "framer-motion";

const variants = {
  initial: { x: 1000 },
  animate: { x: 0 },
};

export default function SectionTitle({ title }: { title: string }) {
  return (
    <motion.h3
      variants={variants}
      className="third-title text-container w-3/4 mt-7 px-4 py-2"
    >
      {title}
    </motion.h3>
  );
}
