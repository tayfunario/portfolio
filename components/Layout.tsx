import { useEffect, useState } from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="px-2 bg-gradient-to-br from-gradient-start to-gradient-end overflow-hidden">
      {children}
    </div>
  );
}
