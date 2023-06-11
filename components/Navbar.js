import Link from "next/link";
import { useState, useEffect, useRef } from "react";

import {
  SunIcon,
  MoonIcon,
  ArrowDownOnSquareIcon,
  ArrowDownTrayIcon,
} from "@heroicons/react/24/solid";
import { useLocalStorage } from "usehooks-ts";
import { useRouter } from "next/router";
import useDownloader from "react-use-downloader";

export default function Navbar() {
  const [theme, setTheme] = useLocalStorage("theme", "dark");

  const reportTemplatePdf = useRef();

  // const [theme, setTheme] = useState(
  //   if (typeof window !== "undefined") {
  //     localStorage.setItem("theme") ? localStorage.getItem("theme") : "light"
  //   })

  const handleToggle = (e) => {
    if (e.target.checked) {
      setTimeout(() => {
        setTheme("dark");
      }, 100);
    } else {
      setTimeout(() => {
        setTheme("light");
      }, 100);
    }
  };

  useEffect(() => {
    document.querySelector("html").setAttribute("data-theme", theme);
  }, [theme]);

  const router = useRouter();
  const DownloadFile = () => {
    window.location.href =
      "https://www.slideshare.net/YuuLei/resumegregoriopdf";
  };

  return (
    <>
      <nav className="flex lg:px-10 gap-10 lg:gap-16 w-full h-full items-center flex-col lg:py-10 lg:col-span-2 mb-5 lg:mb-0 lg:items-start">
        <div className="w-full text-center lg:text-left">
          <p className="text-6xl w-full">Miks Gregorio</p>
          <p className="text-xl mt-3 w-full">
            Front-End Developer & Quality Assurance
          </p>
        </div>
        <div className="flex justify-evenly flex-row lg:flex-col text-xl font-bold gap-2 w-full">
          <Link
            className="w-fit lg:flex-1 justify-center lg:justify-start hover:scale-105 hover:opacity-30"
            href="/"
          >
            {router.pathname === "/" ? "●" : "Home"}
          </Link>
          <Link
            className="w-fit lg:flex-1 justify-center lg:justify-start hover:scale-105 hover:opacity-30"
            href="/projects"
          >
            {router.pathname === "/projects" ? "●" : "Projects"}
          </Link>
          <Link
            className="w-fit lg:flex-1 justify-center lg:justify-start hover:scale-105 hover:opacity-30"
            href="/info"
          >
            {router.pathname === "/info" ? "●" : "Info"}
          </Link>
          <Link
            className="w-fit lg:flex-1 justify-center lg:justify-start hover:scale-105 hover:opacity-30"
            href="/contact"
          >
            {router.pathname === "/contact" ? "●" : "Contact"}
          </Link>
        </div>

        <div className=" flex items-end lg:h-full gap-5">
          <button className="font-bold text-lg">
            <label className="swap swap-rotate">
              <input
                type="checkbox"
                onChange={handleToggle}
                checked={theme === "light" ? false : true}
              />
              <div alt="light" className="w-fit swap-on">
                <SunIcon className="h-6 w-6" />
              </div>
              <div alt="dark" className="w-fit swap-off">
                <MoonIcon className="h-6 w-6" />
              </div>
            </label>
          </button>
          <div>
            <Link
              href={"/RESUME_GREGORIO.pdf"}
              download="Gregorio_Resume"
              target="_blank"
              rel="noreferrer"
              className="hover:scale-105 hover:opacity-30"
            >
              <button>
                <ArrowDownTrayIcon className="h-6 w-6" />
              </button>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
