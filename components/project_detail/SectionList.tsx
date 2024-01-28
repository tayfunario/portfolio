import SectionTitle from "./SectionTitle";

interface SectionListProps {
  title: string;
  list: string[];
}

export default function SectionList({ title, list }: SectionListProps) {
  return (
    <>
      <SectionTitle title={title} />

      <div className="text-container mt-2 px-4 py-2">
        <ul className="list-disc list-inside text-sm mb-2">
          {list.map((elem, index) => (
            <li key={index}>{elem}</li>
          ))}
        </ul>
      </div>
    </>
  );
}
