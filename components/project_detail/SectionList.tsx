import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";

interface SectionListProps {
  title: string;
  list: string[];
}

const variants = {
  initial: { x: 1000 },
  animate: { x: 0 },
};

export default function SectionList({ title, list }: SectionListProps) {
  return (
    <motion.div variants={variants}>
      <SectionTitle title={title} />

      <div className="text-container mt-2 px-4 py-2">
        <ul className="list-disc list-inside text-sm mb-2">
          {list.map((elem, index) => (
            <li key={index}>{elem}</li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}
