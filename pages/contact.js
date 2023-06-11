import Link from "next/link";
import {
  motion,
  AnimatePresence,
  useAnimate,
  usePresence,
} from "framer-motion";

export default function ContactPage() {
  return (
    <>
      <motion.div
        className="flex text-lg gap-2 font-bold flex-col lg:justify-end lg:items-end h-full w-full px-10 py-10"
        animate={{ opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 0.3 }}
        initial={{ opacity: 0 }}
      >
        <span className="mb-2">▶ My Contacts</span>
        <span>(+63) 920 459 8428</span>
        <Link
          href="mailto:(gregoriomikkie@gmail.com)"
          className="hover:scale-105 hover:opacity-30 w-fit"
        >
          Email Me ↗
        </Link>
      </motion.div>
    </>
  );
}
