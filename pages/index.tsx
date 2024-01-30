import Contact from "@/components/Contact";
import Intro from "@/components/Intro";
import Layout from "@/components/Layout";
import MyStack from "@/components/MyStack";
import Projects from "@/components/Projects";
import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function Home() {
  const [currentPageId, setCurrentPageId] = useState<number>(1);
  const [isLocked, setIsLocked] = useState<boolean>(false);
  const [initialScrollDown, setInitialScrollDown] = useState<boolean>(false);

  useEffect(() => {
    window.addEventListener("wheel", handleScroll, { passive: false });

    // Prevent scrolling on stack container
    const stackContainer = document.getElementById("stack-container");
    stackContainer?.addEventListener("wheel", (e) => {
      e.stopPropagation();
    });

    return () => window.removeEventListener("wheel", handleScroll);
  }, [isLocked]);

  const handleScroll = (e: WheelEvent) => {
    if (isLocked) {
      e.stopPropagation();
    } else {
      if (e.deltaY > 0 && currentPageId < 4) {
        setCurrentPageId(currentPageId + 1);
        setInitialScrollDown(true);
        handleLock();
      } else if (e.deltaY < 0 && currentPageId > 1) {
        setCurrentPageId(currentPageId - 1);
        setInitialScrollDown(false);
        handleLock();
      }
    }
  };

  const handleLock = () => {
    setIsLocked(true);
    setTimeout(() => {
      setIsLocked(false);
    }, 2500);
  };

  return (
    <Layout>
      <AnimatePresence mode="wait">
        {
          {
            1: <Intro key={0} />,
            2: <MyStack key={1} initialScrollDown={initialScrollDown} />,
            3: <Projects key={2} initialScrollDown={initialScrollDown} />,
            4: <Contact key={3} />,
          }[currentPageId]
        }
      </AnimatePresence>
    </Layout>
  );
}
