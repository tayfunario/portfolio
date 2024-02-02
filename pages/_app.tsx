import "@/styles/globals.css";
import { AnimatePresence, motion } from "framer-motion";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={router.route}
        initial={{
          clipPath: "polygon(100% 100%, 0 100%, 0 100%, 100% 100%)",
          opacity: 0,
        }}
        animate={{
          clipPath: "polygon(100% 100%, 0 100%, 0 0, 100% 0)",
          opacity: 1,
        }}
        exit={{
          clipPath: "polygon(100% 0, 0 0, 0 0, 100% 0)",
          opacity: 0,
        }}
        transition={{ delay: 0.1, duration: 0.25 }}
      >
        <Component {...pageProps} />
      </motion.div>
    </AnimatePresence>
  );
}
