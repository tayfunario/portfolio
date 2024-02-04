export default function PageIndicator({ pageNum }: { pageNum: number }) {
  return (
    <div className="absolute top-1/2 -translate-y-1/2 md:right-2 right-1 flex flex-col justify-center items-center gap-y-1 py-3 px-[6px] bg-gray-300 rounded-full">
      {Array.from({ length: 4 }, (_, i) => (
        <div
          key={i}
          className={`w-2 h-2 rounded-full ${
            i + 1 === pageNum ? "bg-cyan-500" : "bg-gray-100"
          }`}
        />
      ))}
    </div>
  );
}
