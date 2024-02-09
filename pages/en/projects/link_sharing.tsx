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
          <MainTitle title="Link Sharing App" />
          <SectionTitle title="Introduction" />
          <IntroText
            firstParagraph="Link Sharing App is a web application where you can collect your social media links in one place and display them. You can change the order of the links by dragging them. You can customize the interface by adding your personal information and profile photo. You can edit the links you added."
            stackList={[
              "Nextjs",
              "TypeScript",
              "Tailwind CSS",
              "React DND Kit",
              "CSS Flexbox-Grid",
              "Semantik HTML",
              "Framer-Motion",
            ]}
            link="https://link-sharing-app-beta.vercel.app/"
            sourceLink="https://github.com/tayfunetta/link-sharing-app"
          />
        </main>
        <section>
          <SectionParagraph
            title="Stack Explanation"
            text="I developed the project using Next.js, a React framework that facilitates breaking down the application into components and offers SEO advantages. I utilized TypeScript for type safety and easier error detection. I quickly styled the application using Tailwind CSS. Additionally, I added drag-and-drop functionality using React DND Kit."
          />
        </section>
        <section>
          <SectionList
            title="Features"
            list={[
              "Drag-and-Drop",
              "Customizing the profile",
              "Transaction alerts",
              "Copying the link to the clipboard",
              "Form validations",
            ]}
          />
        </section>
        <Image
          src="/screenshots/link_sharing-2.png"
          width={1920}
          height={1080}
          className="text-container mt-5"
          alt="Link Sharing App"
        />
        <section>
          <SectionParagraph
            title="Purpose of the Project"
            text="The main purpose of this project was to show that I could handle a difficult project and gain familiarity. In addition, I learned how to add a Drag-and-Drop mechanism."
          />
        </section>

        <section>
          <SectionParagraph
            title="Challenges and Solutions"
            text="When I assigned the same value to the state, it didn't trigger a re-render. To resolve this, I provided the new value within an object. This way, the reference of the state changed, and the re-render was triggered. Secondly, I needed to use a library to add the Drag-and-Drop mechanism. It took some time to learn how to use and integrate this library into the application"
          />
        </section>
        <section>
          <SectionList
            title="What I Learned"
            list={[
              "How a Drag-and-Drop mechanism works",
              "Importance of reusable components",
              "Usage of regex for form validation",
            ]}
          />
        </section>
      </motion.div>
    </Layout>
  );
}
