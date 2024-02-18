import "@/styles/globals.css";
import { AnimatePresence, motion } from "framer-motion";
import type { AppProps } from "next/app";
import Head from "next/head";
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
        transition={{ duration: 0.4 }}
      >
        <Head>
          <link rel="icon" href="/favicon-16x16.png" />
          <title>Tayfun Emre Kahraman</title>
        </Head>
        <Component {...pageProps} />
      </motion.div>
    </AnimatePresence>
  );
}
