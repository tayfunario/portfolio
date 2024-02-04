import { FaAngleDown } from "react-icons/fa";
import PageIndicator from "./PageIndicator";

export default function Layout({
  pageNum,
  children,
}: {
  pageNum?: number;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-gradient-to-r from-gradient-start to-gradient-end overflow-hidden">
      {pageNum !== 4 && (
        <FaAngleDown className="absolute bottom-2 right-1/2 translate-x-1/2 size-8 text-white" />
      )}
      <div className="mx-auto max-w-screen-sm px-2">{children}</div>
      {pageNum && <PageIndicator pageNum={pageNum} />}
    </div>
  );
}
