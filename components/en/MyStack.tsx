import { motion } from "framer-motion";
import StackItem from "./StackItem";
import { useEffect, useState } from "react";
import { usePageListener, useTouchPageListener } from "../useListener";

const stackContainerVariants = {
  hidden: {},
  visible: {
    transition: { delayChildren: 0.3, staggerChildren: 0.08 },
  },
};

export default function MyStack({
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
        initial={{ y: "-3vh" }}
        animate={{ y: 0, transition: { delay: 1.3 } }}
        className="col-span-2 w-full bg-white bg-opacity-90 self-end rounded-2xl"
      >
        <h2 className="second-title p-2">Skills</h2>
      </motion.div>

      <motion.div
        variants={stackContainerVariants}
        initial="hidden"
        animate="visible"
        id="stack-container"
        className="grow overflow-auto grid grid-cols-3 place-items-center gap-5 rounded-2xl bg-black bg-opacity-40 my-3 md:mx-12 mx-9 p-5"
      >
        <StackItem
          id={0}
          name="HTML"
          src="html"
          alt="html"
          currentlyBeingLearned={false}
        />
        <StackItem
          id={1}
          name="CSS"
          src="css"
          alt="css"
          currentlyBeingLearned={false}
        />
        <StackItem
          id={2}
          name="JavaScript"
          src="js"
          alt="javascript"
          currentlyBeingLearned={false}
        />
        <StackItem
          id={3}
          name="TypeScript"
          src="ts"
          alt="typescript"
          currentlyBeingLearned={false}
        />
        <StackItem
          id={4}
          name="React.js"
          src="react"
          alt="react.js"
          currentlyBeingLearned={false}
        />
        <StackItem
          id={5}
          name="Next.js"
          src="next"
          alt="next.js"
          currentlyBeingLearned={false}
        />
        <StackItem
          id={6}
          name="Tailwind"
          src="tailwind"
          alt="tailwind"
          currentlyBeingLearned={false}
        />
        <StackItem
          id={7}
          name="Redux"
          src="redux"
          alt="redux"
          currentlyBeingLearned={false}
        />
        <StackItem
          id={18}
          name="Git"
          src="git"
          alt="git"
          currentlyBeingLearned={false}
        />
        <StackItem
          id={17}
          name="Firebase"
          src="firebase"
          alt="firebase"
          currentlyBeingLearned={false}
        />
        <StackItem
          id={17}
          name="Jest"
          src="jest"
          alt="jest"
          currentlyBeingLearned={false}
        />
        <StackItem
          id={8}
          name="Cypress"
          src="cypress"
          alt="cypress"
          currentlyBeingLearned={false}
        />
        <StackItem
          id={15}
          name="Docker"
          src="docker"
          alt="docker"
          currentlyBeingLearned={false}
        />
        <StackItem
          id={9}
          name="Node.js"
          src="nodejs"
          alt="nodejs"
          currentlyBeingLearned={false}
        />
        <StackItem
          id={10}
          name="Express.js"
          src="expressjs"
          alt="expressjs"
          currentlyBeingLearned={false}
        />
        <StackItem
          id={11}
          name="PostgreSQL"
          src="postgresql"
          alt="postgresql"
          currentlyBeingLearned={false}
        />
        <StackItem
          id={12}
          name="Prisma ORM"
          src="prisma"
          alt="prisma orm"
          currentlyBeingLearned={false}
        />
        <StackItem
          id={13}
          name="JSON Web Token"
          src="jwt"
          alt="json web token"
          currentlyBeingLearned={false}
        />
        <StackItem
          id={14}
          name="GraphQL"
          src="graphql"
          alt="graphql"
          currentlyBeingLearned={false}
        />
        <StackItem
          id={16}
          name="Design Patterns"
          src="pattern"
          alt="design patterns"
          currentlyBeingLearned={false}
        />
      </motion.div>
    </motion.section>
  );
}
