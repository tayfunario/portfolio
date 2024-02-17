import Image from "next/image";
import Layout from "@/components/Layout";
import MainTitle from "@/components/en/project_detail/MainTitle";
import SectionTitle from "@/components/en/project_detail/SectionTitle";
import IntroText from "@/components/en/project_detail/IntroText";
import SectionParagraph from "@/components/en/project_detail/SectionParagraph";
import SectionList from "@/components/en/project_detail/SectionList";
import { motion } from "framer-motion";

const mainVariants = {
  animate: { transition: { staggerChildren: 0.1 } },
};

export default function Index() {
  return (
    <Layout>
      <motion.div
        variants={mainVariants}
        initial="initial"
        animate="animate"
        className="min-h-screen my-5"
      >
        <main>
          <MainTitle title="Grostore" />

          <SectionTitle title="Introduction" />

          <IntroText
            firstParagraph="Grostore is an e-commerce application. Users can add products to the cart, view the cart, and complete the payment process. Users can also view their previous orders and active orders from the profile page. They can use dark mode according to the situation. However, Grostore is my first big project, so please excuse some errors :)"
            secondParagraph="You can log in to the admin panel and manage products, categories, and orders. The orders you send are added to the relevant user's order history. email: admin@test.com, password: admin123"
            stackList={[
              "React.js",
              "Javascript",
              "Tailwind CSS",
              "Redux Toolkit",
              "Firebase",
              "Semantik HTML",
              "Swiper.js",
            ]}
            link="https://tayfunario.github.io/ai-grostore/"
            sourceLink="https://github.com/tayfunetta/ai-grostore"
          />
        </main>
        <section>
          <SectionParagraph
            title="Stack Explanation"
            text="I used Firebase as the database because it is an easy, fast, and simple solution. I stored the products added to the cart in a global state with Redux. I used Redux Toolkit to manage the global state."
          />
        </section>

        <section>
          <SectionList
            title="Features"
            list={[
              "Authentication",
              "Listing products by category",
              "Transaction alerts",
              "Search",
              "Dark mode",
              "Form validations",
            ]}
          />
        </section>

        <Image
          src="/screenshots/grostore-2.png"
          width={1920}
          height={1080}
          className="text-container mt-5"
          alt="grostore"
        />

        <section>
          <SectionParagraph
            title="Challenges and Solutions"
            text="In this website, the most challenging and time-consuming part for me was creating the names and descriptions of the products. I had artificial intelligence do this for me. I used GPT-3 to generate the names and descriptions for approximately 100 products."
          />
        </section>

        <section>
          <SectionList
            title="What I Learned"
            list={[
              "Usage of Firebase authentication and database",
              "Importance of reusable components",
              "Global state management with Redux Toolkit",
              "Adding dark mode",
              "Creating a search bar using regex",
            ]}
          />
        </section>
      </motion.div>
    </Layout>
  );
}
