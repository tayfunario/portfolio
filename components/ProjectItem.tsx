import Image from "next/image";
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
    <button className="text-start p-3 bg-black bg-opacity-30 rounded-lg">
      <Image
        src={`/screenshots/${image}.png`}
        className="rounded-lg"
        width={1000}
        height={1000}
        alt="31"
      />
      <h3 className="project-title text-gray-100 my-2">{title}</h3>
      <p className="project-description text-gray-300">{description}</p>

      <button className="project-btn text-gray-200 flex items-center mt-2 ml-auto border-b border-transparent hover:border-white transition-colors">
        <span className="mr-px">Projeyi İncele</span>
        <FaAngleDoubleRight className="rounded-full bg-black bg-opacity-15 p-1 size-6" />
      </button>
    </button>
  );
}
