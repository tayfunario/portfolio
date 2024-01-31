import { useEffect, useState } from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-gradient-to-br from-gradient-start to-gradient-end overflow-hidden">
      <div className="mx-auto max-w-screen-sm px-2">{children}</div>
    </div>
  );
}
