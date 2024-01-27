import { motion } from "framer-motion";
import StackItem from "./StackItem";

export default function MyStack({ pageId }: { pageId: number }) {
  return (
    <motion.section
      initial={{ y: "100vh" }}
      animate={{ y: "0vh" }}
      exit={{ y: "100vh" }}
      transition={{ duration: 1 }}
      className="h-screen flex flex-col pt-2"
    >
      <motion.div className="col-span-2 w-full bg-white bg-opacity-90 self-end rounded-2xl">
        <h2 className="second-title p-2">Bildiklerim</h2>
      </motion.div>

      <motion.div id="stack-container" className="grow overflow-auto grid grid-cols-3 place-items-center gap-5 rounded-2xl bg-black bg-opacity-40 my-3 p-5">
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
          id={8}
          name="Cypress"
          src="cypress"
          alt="cypress"
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
          currentlyBeingLearned={true}
        />
        <StackItem
          id={15}
          name="Nest.js"
          src="nestjs"
          alt="nest.js"
          currentlyBeingLearned={true}
        />
        <StackItem
          id={16}
          name="Design Patterns"
          src="pattern"
          alt="design patterns"
          currentlyBeingLearned={true}
        />
      </motion.div>
    </motion.section>
  );
}
