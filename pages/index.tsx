import Intro from "@/components/Intro";
import Layout from "@/components/Layout";
import MyStack from "@/components/MyStack";
import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function Home() {
  const [currentPageId, setCurrentPageId] = useState<number>(1);
  const [isLocked, setIsLocked] = useState<boolean>(false);

  useEffect(() => {
    window.addEventListener("wheel", handleScroll, { passive: false });

    const stackContainer = document.getElementById("stack-container");
    stackContainer?.addEventListener("wheel", (e) => {
      e.stopPropagation();
    });

    return () => window.removeEventListener("wheel", handleScroll);
  }, [isLocked]);

  const handleScroll = (e: any) => {
    if (isLocked) {
      e.preventDefault();
    } else {
      if (e.deltaY > 0) {
        setCurrentPageId(2);
      } else if (e.deltaY < 0) {
        setCurrentPageId(1);
      }
      handleLock();
    }
  };

  const handleLock = () => {
    setIsLocked(true);
    setTimeout(() => {
      setIsLocked(false);
    }, 2000);
  };

  return (
    <Layout>
      <AnimatePresence mode="wait">
        {currentPageId === 1 ? (
          <Intro key={0} pageId={currentPageId} />
        ) : (
          <MyStack key={1} pageId={currentPageId} />
        )}
      </AnimatePresence>
    </Layout>
  );
}
