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
        className="grow overflow-auto gap-5 rounded-2xl bg-black bg-opacity-40 my-3 p-5"
      >
        <ProjectItem
          title="Product Feedback App"
          description="Yapılan ürünlerin geri bildirimlerini toplayan bir uygulama."
          image="product_feedback"
        />
      </motion.div>
    </motion.section>
  );
}
