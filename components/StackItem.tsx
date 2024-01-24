import Image from "next/image";

type ItemProps = {
  id: number;
  name: string;
  src: string;
  alt: string;
};

export default function Item({ id, name, src, alt }: ItemProps) {
  return (
    <article className="bg-black bg-opacity-30 rounded-lg p-2">
      <Image
        src={`/technologies/${src}.webp`}
        width={60}
        height={60}
        alt={alt}
      />
      <h3 className="font-semibold text-center text-gray-100 mt-2">{name}</h3>
    </article>
  );
}
