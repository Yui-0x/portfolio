import Link from "next/link";
import { motion } from "framer-motion";

export default function ProjectsPage() {
  return (
    <>
      <motion.div
        animate={{ opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 0.3 }}
        initial={{ opacity: 0 }}
        className="flex flex-col justify-end items-end px-10 py-10 w-full h-full"
      >
        <span className="font-bold text-lg mb-10">▶ Projects</span>
        <Link
          href="https://wicket.vercel.app"
          target="_blank"
          className="flex items-end gap-3 hover:scale-105 hover:opacity-30 "
        >
          {" "}
          <div className="text-lg font-bold">4th Year Thesis</div>
          <div className="text-6xl">// The Wicket</div>
        </Link>
      </motion.div>
    </>
  );
}
