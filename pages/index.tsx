import Contact from "@/components/Contact";
import Intro from "@/components/Intro";
import Layout from "@/components/Layout";
import MyStack from "@/components/MyStack";
import Projects from "@/components/Projects";
import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { useTouchListener } from "@/components/useListener";

export default function Home() {
  const [currentPageId, setCurrentPageId] = useState<number>(1);
  const [initialScrollDown, setInitialScrollDown] = useState<boolean>(false);
  const [isLocked, setIsLocked] = useState<boolean>(false);

  useEffect(() => {
    if (window.innerWidth > 800) {
      window.addEventListener("wheel", handleWheel, { passive: false });

      // Prevent scrolling on stack container
      const stackContainer = document.getElementById("stack-container");
      stackContainer?.addEventListener("wheel", (e) => {
        e.stopPropagation();
      });
    } else {
      useTouchListener({
        currentPageId,
        setCurrentPageId,
        setInitialScrollDown,
      });
    }

    return () => window.removeEventListener("wheel", handleWheel);
  });

  const handleWheel = (e: WheelEvent) => {
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
    }, 2000);
  };

  return (
    <Layout pageNum={currentPageId}>
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
