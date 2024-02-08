import { motion } from "framer-motion";
import ProjectItem from "./ProjectItem";
import { FaExternalLinkAlt } from "react-icons/fa";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePageListener, useTouchPageListener } from "../useListener";

const stackContainerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.7 },
  },
};

export default function Projects({
  initialScrollDown,
}: {
  initialScrollDown: boolean;
}) {
  const [scrollDown, setScrollDown] = useState<boolean>(initialScrollDown);
  let lock: boolean = false;

  useEffect(() => {
    if (window.innerWidth > 800) {
      usePageListener({ lock, callback: setScrollDown });
    } else {
      useTouchPageListener({ lock, callback: setScrollDown });
    }
  }, []);

  return (
    <motion.section
      initial={{ y: scrollDown ? "100vh" : "-100vh" }}
      animate={{ y: "0vh" }}
      exit={{ y: scrollDown ? "-100vh" : "100vh" }}
      transition={{ duration: 1 }}
      className="h-svh flex flex-col pt-2"
    >
      <motion.div
        initial={{ x: "100vw" }}
        animate={{ x: 0, transition: { delay: 1 } }}
        className="col-span-2 w-full bg-white bg-opacity-90 self-end rounded-2xl"
      >
        <h2 className="second-title p-2">My Projects</h2>
      </motion.div>

      <motion.div
        variants={stackContainerVariants}
        initial="hidden"
        animate="visible"
        id="stack-container"
        className="grow flex flex-col gap-y-8 overflow-auto rounded-2xl bg-black bg-opacity-40 my-3 md:mx-12 mx-10 p-5"
      >
        <ProjectItem
          title="Product Feedback App"
          description="Application that collects feedback on products."
          image="product_feedback"
          isTested={true}
        />

        <ProjectItem
          title="Invoice App"
          description="Application that allows you to create and manage invoices."
          image="invoice"
          isTested={true}
        />
        <ProjectItem
          title="Link Sharing App"
          description="An application where links to social media accounts are shared. You can change the order by dragging."
          image="link_sharing"
          isTested={true}
        />

        <ProjectItem
          title="Grostore"
          description="Advanced e-commerce application with a wide range of features."
          image="grostore"
          isTested={false}
        />

        <Link
          href="https://github.com/tayfunetta?tab=repositories"
          target="_blank"
          className="flex justify-center items-center gap-x-3 w-44 mx-auto py-2 bg-black bg-opacity-45 opacity-70 text-xs text-white font-semibold rounded-2xl"
        >
          Other Projects <FaExternalLinkAlt className="size-[10px]" />
        </Link>
      </motion.div>
    </motion.section>
  );
}
