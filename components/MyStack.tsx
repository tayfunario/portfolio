import { motion } from "framer-motion";
import { useEffect } from "react";

export default function MyStack({ pageId }: { pageId: number }) {
  return (
    <motion.div
      // initial={{ y: "100vh" }}
      // animate={{ y: "0vh" }}
      // exit={{ y: "-100vh" }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="h-screen bg-emerald-500"
    >
      Bildiklerim
    </motion.div>
  );
}
