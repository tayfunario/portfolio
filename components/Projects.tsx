import Layout from "./Layout";
import { motion } from "framer-motion";
import ProjectItem from "./ProjectItem";

export default function Projects() {
  return (
    <motion.section className="h-screen flex flex-col pt-2">
      <motion.div className="col-span-2 w-full bg-white bg-opacity-90 self-end rounded-2xl">
        <h2 className="text-xl font-semibold p-2">Projelerim</h2>
      </motion.div>

      <motion.div
        id="stack-container"
        className="grow flex flex-col gap-y-8 overflow-auto rounded-2xl bg-black bg-opacity-40 my-3 p-5"
      >
        <ProjectItem
          title="Product Feedback App"
          description="Yapılan ürünlerin geri bildirimlerini toplayan bir uygulama."
          image="product_feedback"
        />

        <ProjectItem
          title="Invoice App"
          description="Faturaların kaydedildiği ve düzenlendiği bir uygulama."
          image="invoice"
        />

        <ProjectItem
          title="Link Sharing App"
          description="Sosyal medya hesaplarının linklerinin paylaşıldığı bir uygulama."
          image="link_sharing"
        />

        <ProjectItem
          title="Grostore"
          description="Gelişmiş bir alışveriş uygulaması."
          image="grostore"
        />
      </motion.div>
    </motion.section>
  );
}
