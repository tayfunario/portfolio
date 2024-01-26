import Image from "next/image";
import Link from "next/link";
import { FaAngleDoubleRight } from "react-icons/fa";

type ProjectItemProps = {
  title: string;
  description: string;
  image: string;
};

export default function ProjectItem({
  title,
  description,
  image,
}: ProjectItemProps) {
  return (
    <div className="flex flex-col text-start p-3 bg-black bg-opacity-30 rounded-2xl">
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
        <span className="mr-px hover:underline underline-offset-2">Projeyi İncele</span>
        <FaAngleDoubleRight className="rounded-full bg-black bg-opacity-30 p-1 size-6" />
      </Link>
    </div>
  );
}
