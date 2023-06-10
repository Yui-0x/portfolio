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
        className="flex flex-col gap-8 justify-end items-end px-10 py-10 w-full h-full"
      >
        <p className="flex h-full text-lg lg:w-56 font-bold">
          Hello there! I'm Mikkie Gregorio 22 years old from the Philippines, a
          passionate and dedicated programmer who also loves playing video
          games. With a love for both technology and the virtual worlds of
          gaming, I find myself constantly immersed in the realms of code and
          pixels.
        </p>

        <div className="grid grid-cols-3 gap-2">
          <span className="border-2 border-primary px-2 text-center">HTML</span>
          <span className="border-2 border-primary px-2 text-center">CSS</span>
          <span className="border-2 border-primary px-2 text-center">
            JavaScript
          </span>
          <span className="border-2 border-primary px-2 text-center">Git</span>
          <span className="border-2 border-primary px-2 text-center">
            Frameworks
          </span>
          <span className="border-2 border-primary px-2 text-center">
            Libraries
          </span>
        </div>
      </motion.div>
    </>
  );
}
