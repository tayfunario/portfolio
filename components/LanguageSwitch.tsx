import Image from "next/image";
import { FaAngleDown } from "react-icons/fa";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function LanguageSwitch({
  initialLanguage = "tr",
}: {
  initialLanguage: "tr" | "en";
}) {
  const [open, setOpen] = useState<boolean>(false);
  const [chosenLanguage, setChosenLanguage] = useState<string>(initialLanguage);
  const router = useRouter();

  useEffect(() => {
    document.addEventListener("click", (e) => {
      if (!(e.target as HTMLElement).closest("#language-switch")) {
        setOpen(false);
      }
    });
  }, []);

  return (
    <motion.div
      animate={{ height: open ? "4.4rem" : "2.5rem" }}
      id="language-switch"
      className="absolute top-5 right-0 flex flex-col justify-between bg-white rounded-xl overflow-hidden border-2 border-transparent hover:border-teal-300 transition-colors"
      onClick={() => setOpen(!open)}
    >
      <FaAngleDown
        className={`absolute top-3 left-[6px] text-sky-500 ${
          open ? "rotate-180" : "rotate-0"
        } transition-transform`}
      />
      <div className="pt-[10px] pb-2 pl-7 pr-3 hover:bg-sky-100">
        <Image
          src={`/${chosenLanguage == "tr" ? "tr" : "uk"}.svg`}
          className="hover:bg-gray-100"
          width={25}
          height={25}
          alt={`flag of ${chosenLanguage}`}
        />
      </div>

      <button
        className="pt-[6px] pb-3 pl-7 pr-3 hover:bg-sky-100"
        onClick={() => {
          setChosenLanguage(chosenLanguage == "tr" ? "en" : "tr");
          router.push(`/portfolio/${chosenLanguage == "tr" ? "en" : "/"}`);
        }}
      >
        <Image
          src={`/${chosenLanguage == "tr" ? "uk" : "tr"}.svg`}
          className="hover:bg-gray-100"
          width={25}
          height={25}
          alt="flag of turkiye"
        />
      </button>
    </motion.div>
  );
}
