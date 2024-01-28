import { motion } from "framer-motion";

const variants = {
  initial: { x: 1000 },
  animate: { x: 0 },
};

export default function MainTitle({ title }: { title: string }) {
  return (
    <motion.div variants={variants} className="text-container px-4 py-2">
      <h2 className="second-title">{title}</h2>
    </motion.div>
  );
}
