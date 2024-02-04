import { motion } from "framer-motion";
import Link from "next/link";
import { FaChevronLeft } from "react-icons/fa";

const variants = {
  initial: { x: "100vw" },
  animate: { x: 0 },
};

export default function MainTitle({ title }: { title: string }) {
  return (
    <motion.div variants={variants} className="text-container px-4 py-2">
      <Link href="/portfolio" className="flex items-center mb-1 text-xs text-cyan-600 font-semibold">
        <FaChevronLeft className="size-[10px]" /> Geri dön
      </Link>
      <h2 className="second-title">{title}</h2>
    </motion.div>
  );
}
