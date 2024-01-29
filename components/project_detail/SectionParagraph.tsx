import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";

interface SectionParagraphProps {
  title: string;
  text: string;
}

const variants = {
  initial: { x: 1000 },
  animate: { x: 0 },
};

export default function SectionParagraph({
  title,
  text,
}: SectionParagraphProps) {
  return (
    <motion.div variants={variants}>
      <SectionTitle title={title} />
      <div className="text-container mt-2 px-4 py-3">
        <p className="text-sm">{text}</p>
      </div>
    </motion.div>
  );
}
