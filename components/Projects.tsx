import Layout from "./Layout";
import { motion } from "framer-motion";
import ProjectItem from "./ProjectItem";
import { FaExternalLinkAlt } from "react-icons/fa";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Projects({
  initialScrollDown,
}: {
  initialScrollDown: boolean;
}) {
  const [scrollDown, setScrollDown] = useState<boolean>(initialScrollDown);

  useEffect(() => {
    document.addEventListener("wheel", (e: WheelEvent) => {
      if (e.deltaY > 0) {
        setScrollDown(true);
      } else if (e.deltaY < 0) {
        setScrollDown(false);
      }
    });
  }, []);

  return (
    <motion.section
      initial={{ y: scrollDown ? "100vh" : "-100vh" }}
      animate={{ y: "0vh" }}
      exit={{ y: scrollDown ? "-100vh" : "100vh" }}
      transition={{ duration: 1 }}
      className="h-screen flex flex-col pt-2"
    >
      <motion.div className="col-span-2 w-full bg-white bg-opacity-90 self-end rounded-2xl">
        <h2 className="second-title p-2">Projelerim</h2>
      </motion.div>

      <motion.div
        id="stack-container"
        className="grow flex flex-col gap-y-8 overflow-auto rounded-2xl bg-black bg-opacity-40 my-3 p-5"
      >
        <ProjectItem
          title="Product Feedback App"
          description="Yapılan ürünlerin geri bildirimlerini toplayan bir uygulama."
          image="product_feedback"
          isTested={true}
        />

        <ProjectItem
          title="Invoice App"
          description="Faturaların kaydedildiği ve düzenlendiği bir uygulama."
          image="invoice"
          isTested={true}
        />

        <ProjectItem
          title="Link Sharing App"
          description="Sosyal medya hesaplarının linklerinin paylaşıldığı bir uygulama. Sürükleyerek sıralamayı değiştirebilirsiniz."
          image="link_sharing"
          isTested={true}
        />

        <ProjectItem
          title="Grostore"
          description="Gelişmiş bir alışveriş uygulaması."
          image="grostore"
          isTested={false}
        />

        <Link
          href="https://github.com/tayfunetta?tab=repositories"
          target="_blank"
          className="flex justify-center items-center gap-x-3 w-44 mx-auto py-2 bg-black bg-opacity-45 opacity-70 text-xs text-white font-semibold rounded-2xl"
        >
          Diğer Projelerim <FaExternalLinkAlt className="size-[10px]" />
        </Link>
      </motion.div>
    </motion.section>
  );
}
