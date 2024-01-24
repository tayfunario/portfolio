import { motion } from "framer-motion";
import { useEffect } from "react";
import StackItem from "./StackItem";

export default function MyStack({ pageId }: { pageId: number }) {
  return (
    <motion.section
      initial={{ y: "100vh" }}
      animate={{ y: "0vh" }}
      exit={{ y: "100vh" }}
      transition={{ duration: 1 }}
      className="h-screen mt-16"
    >
      <motion.div className="col-span-2 bg-white bg-opacity-90 self-end rounded-2xl">
        <h2 className="text-2xl font-semibold p-3">Bildiklerim</h2>
      </motion.div>

      <motion.div className="grid grid-cols-3 place-items-center gap-5 rounded-2xl bg-black bg-opacity-40 mt-5 p-5">
        <StackItem id={0} name="HTML" src="html" alt="html" />
        <StackItem id={0} name="HTML" src="html" alt="html" />
        <StackItem id={0} name="HTML" src="html" alt="html" />
        <StackItem id={0} name="HTML" src="html" alt="html" />
      </motion.div>
    </motion.section>
  );
}
