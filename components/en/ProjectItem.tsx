import { TiTick } from "react-icons/ti";
import Image from "next/image";
import Link from "next/link";
import { FaAngleDoubleRight } from "react-icons/fa";
import { motion } from "framer-motion";

type ProjectItemProps = {
  title: string;
  description: string;
  image: string;
  isTested: boolean;
};

const divVariants = {
  hidden: {
    scale: 0,
    opacity: 0
  },
  visible: {
    scale: 1,
    opacity: 1,
  },
};

export default function ProjectItem({
  title,
  description,
  image,
  isTested,
}: ProjectItemProps) {
  return (
    <motion.div
      variants={divVariants}
      className="relative flex flex-col text-start p-3 bg-black bg-opacity-30 rounded-2xl"
    >
      {isTested && (
        <div className="absolute top-5 right-0 flex justify-between items-center w-36 project-btn py-1 px-3 text-gray-200 bg-emerald-800 rounded-md">
          <span>E2E Tested</span>
          <TiTick className="size-5 text-green-400" />
        </div>
      )}

      <Image
        src={`/screenshots/${image}.png`}
        className="rounded-lg"
        width={1000}
        height={1000}
        alt={title}
      />
      <h3 className="project-title text-gray-100 my-2">{title}</h3>
      <p className="project-description text-gray-300">{description}</p>

      <Link
        href={`/projects/${image}`}
        className="project-btn self-end flex justify-around items-center w-36 text-gray-200 bg-black bg-opacity-20 mt-2 px-2 py-1 rounded-2xl"
      >
        <span className="mr-px hover:underline underline-offset-2">
          View Details
        </span>
        <FaAngleDoubleRight className="rounded-full bg-black bg-opacity-30 p-1 size-6" />
      </Link>
    </motion.div>
  );
}
