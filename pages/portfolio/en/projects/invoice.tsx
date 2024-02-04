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
          <MainTitle title="Invoice App" />

          <SectionTitle title="Introduction" />
          <IntroText
            firstParagraph="Invoice App is a web application where you can save, edit, and track your past and active invoices. I took the design file from a different source and wrote the project from scratch. I used sessionStorage to store the data."
            stackList={[
              "Nextjs",
              "TypeScript",
              "CSS Flexbox-Grid",
              "Tailwind CSS",
              "Framer-Motion",
            ]}
            link="https://invoice-app-xi-seven.vercel.app/"
            sourceLink="https://github.com/tayfunetta/invoice-app"
          />
        </main>
        <section>
          <SectionParagraph
            title="Stack Explanation"
            text="I preferred Next.js instead of React because it makes routing easier and has SEO advantages. I used TypeScript because JavaScript is not type-safe and makes code maintenance difficult. I quickly created a responsive interface with CSS Flexbox-Grid. Developing the interface with a mobile-first approach also supported this. I wrote the styles with Tailwind CSS. I added animations with Framer-Motion."
          />
        </section>
        <section>
          <SectionList
            title="Features"
            list={[
              "Dark mode",
              "Saving invoices as draft",
              "Filtering invoices according to payment status",
              "Form validation",
            ]}
          />
        </section>
        <Image
          src="/screenshots/invoice-2.png"
          width={1920}
          height={1080}
          className="text-container mt-5"
          alt="Invoice App"
        />
        <section>
          <SectionParagraph
            title="Purpose of the Project"
            text="The project I've built to challenge myself can be used by people to store their past bills instead of keeping them in a drawer or sticking them on the fridge. Of course, after making a database connection :)"
          />
        </section>
        <section>
          <SectionParagraph
            title="Challenges and Solutions"
            text="It was a bit difficult to create the list at the bottom of the invoice editing screen. I created it using CSS Grid. It was a bit difficult to style the input elements correctly when left blank. I solved it using internal listeners such as onChange, onFocus, and onBlur. Other than that, I didn't have much difficulty thanks to TypeScript and reusable components."
          />
        </section>
        <section>
          <SectionList
            title="What I Learned"
            list={[
              "Usage of custom React",
              "Importance of reusable components and styles",
              "The concept of 'Outerloop' in JavaScript",
              "Styling elements dynamically by combining template literals and ternary operator",
            ]}
          />
        </section>
      </motion.div>
    </Layout>
  );
}
