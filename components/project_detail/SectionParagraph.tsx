import SectionTitle from "./SectionTitle";

interface SectionParagraphProps {
  title: string;
  text: string;
}

export default function SectionParagraph({
  title,
  text,
}: SectionParagraphProps) {
  return (
    <div>
      <SectionTitle title={title} />
      <div className="text-container mt-2 px-4 py-3">
        <p className="text-sm">{text}</p>
      </div>
    </div>
  );
}
