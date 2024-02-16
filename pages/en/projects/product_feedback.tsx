import Layout from "@/components/Layout";
import Image from "next/image";
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
          <MainTitle title="Product Feedback App" />

          <SectionTitle title="Introduction" />
          <IntroText
            firstParagraph="Product Feedback App; I developed a Next.js web application for providing feedback on a product, interpreting and voting on received feedback. I obtained the design file from a different source and wrote the project entirely from scratch. I uploaded the database and backend code to a Cloud service. As for the frontend part, I deployed it on Vercel"
            secondParagraph="I accelerated the development process and simplified code maintenance by using reusable components and styles. Employing a mobile-first approach also expedited making the interface responsive. Additionally, I conducted end-to-end tests using Cypress and organized the backend using the MVC pattern."
            stackList={[
              "Nextjs",
              "TypeScript",
              "Tailwind CSS",
              "Framer-Motion",
              "Nodejs",
              "PostgreSQL",
              "Render.com",
            ]}
            link="https://product-feedback-ui.vercel.app/suggestions"
            sourceLink="https://github.com/tayfunetta/product-feedback-ui"
          />
        </main>

        <section>
          <SectionParagraph
            title="Stack Explanation"
            text="Next.js is a framework based on React. Therefore, I created components that reduce code repetition by utilizing the component structures provided by React. I shortened loading times using Next.js functions such as getServerSideProps and getStaticProps, ensuring the website is SEO-friendly. Additionally, I optimized images and links using Next.js's Image and Link components"
          />
        </section>

        <section>
          <SectionList
            title="Features"
            list={[
              "Sorting feedbacks",
              "Filtering feedbacks",
              "Managing feedbacks. If you select a value other than 'suggestion' for the 'Status' feature, the feedback will be moved to the 'Roadmap' page.",
            ]}
          />
        </section>

        <Image
          src="/screenshots/product_feedback-2.png"
          width={1920}
          height={1080}
          className="text-container mt-5"
          alt="Product Feedback App"
        />

        <section>
          <SectionParagraph
            title="Purpose of the Project"
            text="My goal in developing this project was to enhance my full-stack skills by combining front-end and back-end development and to demonstrate my ability to tackle a challenging project. Additionally, I aimed to gain some experience with Cloud deployment while deploying the project in the end."
          />
        </section>

        <section>
          <SectionParagraph
            title="Challenges and Solutions"
            text="I struggled a bit when connecting to the project because it was my first time creating an API and database in the Cloud, but I managed to overcome it. I also faced some challenges while styling certain buttons. However, I managed to do it by combining ternary operators and template literals provided by ES6"
          />
        </section>

        <section>
          <SectionList
            title="What I Learned"
            list={[
              "A little knowledge about Cloud technologies",
              "What the 'fallback' value does in server-side rendering",
              "Difference between getStaticProps and getServerSideProps functions",
              "Integration of the backend and frontend parts of a project",
              "Importance of reusable components and styles",
            ]}
          />
        </section>
      </motion.div>
    </Layout>
  );
}
