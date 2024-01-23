export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex justify-center items-center h-screen px-7 bg-gradient-to-br from-gradient-start to-gradient-end">
      {children}
    </div>
  );
}
