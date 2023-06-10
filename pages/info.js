import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function InfoPage() {
  return (
    <>
      <motion.div
        animate={{ opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 0.3 }}
        initial={{ opacity: 0 }}
        id="info"
        className="flex lg:flex-col w-full h-full"
      >
        <div className="flex lg:items-center lg:w-full px-10 py-10 lg:justify-end">
          <div className="flex flex-col gap-2 font-bold text-lg ">
            <Link
              href="https://www.facebook.com/mikiidesu"
              target="_blank"
              className=" w-fit hover:scale-105 hover:opacity-30 "
            >
              Facebook ↗
            </Link>
            <Link
              href="https://www.linkedin.com/in/mikkie-gregorio-55634a25b/"
              target="_blank"
              className=" w-fit hover:scale-105 hover:opacity-30 "
            >
              LinkedIn ↗
            </Link>
            <Link
              href="https://github.com/Yui-0x"
              target="_blank"
              className=" w-fit hover:scale-105 hover:opacity-30 "
            >
              Github ↗
            </Link>
            <Link
              href="https://twitter.com/yuueii_"
              target="_blank"
              className=" w-fit hover:scale-105 hover:opacity-30 "
            >
              Twitter ↗
            </Link>
            <Link
              href="https://www.instagram.com/_definitelynotmiks/"
              target="_blank"
              className=" w-fit hover:scale-105 hover:opacity-30 "
            >
              Instagram ↗
            </Link>
          </div>
        </div>

        <div className="flex lg:px-10 pl-44 py-10 items-end h-full lg:w-full justify-end">
          <ul className="flex flex-col">
            <li className="mb-2">
              <span className="font-bold text-xl">▶ Certificates</span>
            </li>
            <li>
              <span>Information Technology &#38; 24th IT Exhibit</span>
            </li>
            <li className="indent-1">
              <span className="font-bold">▶ Best Thesis Paper</span>
            </li>
            <li className="indent-1">
              <span className="font-bold">▶ Most Innovative Technology</span>
            </li>
            <li>
              <span>AppCon 2022</span>
            </li>
            <li className="indent-1">
              <span className="font-bold">▶ Certificate of Participation</span>
            </li>
            <li>
              <span>Department of Science and Technology</span>
            </li>
            <li className="indent-1">
              <span className="font-bold">
                ▶ R&#38;D Conference: Scientific Poster Competition
              </span>
            </li>
            <li>
              <span>Great Learning</span>
            </li>
            <li className="indent-1">
              <span className="font-bold">
                ▶ Introduction to Design Thinking
              </span>
            </li>
            <li className="indent-1">
              <span className="font-bold">▶ Data Science Foundations</span>
            </li>
            <li>
              <span>The Interns Hub</span>
            </li>
            <li className="indent-1">
              <span className="font-bold">
                ▶ Certificate of Internship Completion
              </span>
            </li>
          </ul>
        </div>
      </motion.div>
    </>
  );
}
