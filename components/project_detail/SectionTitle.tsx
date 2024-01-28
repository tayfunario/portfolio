import { motion } from "framer-motion";

const variants = {
  initial: { x: 1000 },
  animate: { x: 0 },
};

export default function SectionTitle({ title }: { title: string }) {
  return (
    <motion.div
      variants={variants}
      className="text-container w-3/4 mt-7 px-4 py-2"
    >
      <h3 className="third-title">{title}</h3>
    </motion.div>
  );
}
