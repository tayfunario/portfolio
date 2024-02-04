import Image from "next/image";
import { FaAngleDown } from "react-icons/fa";
import { motion } from "framer-motion";
import { useState } from "react";
import { useRouter } from "next/router";

export default function LanguageSwitch() {
  const [open, setOpen] = useState<boolean>(false);
  const [chosenLanguage, setChosenLanguage] = useState<string>("tr");
  const router = useRouter();

  return (
    <motion.button
      animate={{ height: open ? "4.2rem" : "2.5rem" }}
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
        className="pt-[6px] pb-[10px] pl-7 pr-3 hover:bg-sky-100"
        onClick={() => {
          setChosenLanguage(chosenLanguage == "tr" ? "en" : "tr");
          router.push(`/${chosenLanguage == "tr" ? "en" : "tr"}`);
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
    </motion.button>
  );
}
