import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import { motion, useAnimate, usePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "@heroicons/react";
import { usePathname } from "next/navigation";
// import SplashScreen from "@/components/Splashscreen";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <motion.div
        animate={{ opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 0.3 }}
        initial={{ opacity: 0 }}
        className="flex flex-col lg:gap-8 lg:justify-end lg:items-end px-10 w-full h-full"
      >
        <p className="flex h-full text-center lg:text-left text-lg py-10 lg:w-56 font-bold">
          Hello there! I&#39;m Mikkie Gregorio 22 years old from the Philippines, a
          passionate and dedicated programmer who also loves playing video
          games. With a love for both technology and the virtual worlds of
          gaming, I find myself constantly immersed in the realms of code and
          pixels.
        </p>

        <div className="lg:flex justify-center items-center py-10 lg:justify-end w-full">
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-2">
            <span className="border-2 border-primary px-2 text-center rounded-lg">
              HTML
            </span>
            <span className="border-2 border-primary px-2 text-center rounded-lg">
              CSS
            </span>
            <span className="border-2 border-primary px-2 text-center rounded-lg">
              JavaScript
            </span>
            <span className="border-2 border-primary px-2 text-center rounded-lg">
              Git
            </span>
            <span className="border-2 border-primary px-2 text-center rounded-lg">
              Frameworks
            </span>
            <span className="border-2 border-primary px-2 text-center rounded-lg">
              Libraries
            </span>
          </div>
        </div>
      </motion.div>
    </>
  );
}
