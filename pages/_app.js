import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import Link from "next/link";
import {
  motion,
  AnimatePresence,
  useAnimate,
  usePresence,
  LazyMotion,
  domAnimation,
  m,
} from "framer-motion";
import { useEffect, useState } from "react";
import { themeChange } from "theme-change";
import { usePathname } from "next/navigation";
import { ThemeProvider } from "next-themes";
import SplashScreen from "@/components/splashscreen";
import {} from "framer-motion";
import { useRouter } from "next/router";

export default function App({ Component, pageProps, isVisible }) {
  // const [isPresent, safeToRemove] = usePresence();
  // const [scope, animate] = useAnimate();

  // useEffect(() => {
  //   if (isPresent) {
  //     const enterAnimation = async () => {
  //       await animate(
  //         scope.current,
  //         { opacity: [0, 1] },
  //         { duration: 0.6, delay: 0.3 }
  //       );
  //     };
  //     enterAnimation();
  //   } else {
  //     const exitAnimation = async () => {
  //       await animate(
  //         scope.current,
  //         { opacity: [1, 0] },
  //         { duration: 0.6, delay: 0.3 }
  //       );
  //       safeToRemove();
  //     };
  //     exitAnimation();
  //   }
  // });

  useEffect(() => {
    themeChange(false);
  }, []);

  const pathname = usePathname();
  const isHome =
    pathname === "/" ||
    pathname === "/info" ||
    pathname === "/projects" ||
    pathname === "/contact";
  const [isLoading, setIsLoading] = useState(isHome);

  useEffect(() => {
    if (isLoading) return;
  }, [isLoading]);


  return (
    <>
      {isLoading && isHome ? (
        <SplashScreen finishLoading={() => setIsLoading(false)} />
      ) : (
        <motion.div
          className="flex text-lg gap-2 font-bold flex-col justify-end items-end h-full w-full px-10 py-10 select-none"
          animate={{ opacity: 1 }}
          transition={{ ease: "easeInOut", duration: 0.3 }}
          initial={{ opacity: 0 }}
        >
          <main
            style={{
              backgroundImage: "url('/cat1.gif')",
              backgroundSize: "35%",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
            className="fixed top-0 left-0 z-[99] min-h-screen h-full w-full flex justify-center items-center ease-out delay-150"
          >
            <div className=" w-[94%] h-[90vh] p-4 border-2 border-primary flex flex-col lg:grid lg:grid-cols-6 gap-5">
              <div className=" flex flex-row justify-between lg:flex-col lg:justify-center lg:col-span-2 mb-5 lg:mb-0">
                <Navbar />
              </div>
              <div
                // ref={scope}
                className=" flex flex-row justify-between lg:flex-col lg:justify-center lg:items-center lg:col-span-4 mb-5 lg:mb-0"
              >
                <Component {...pageProps} />
              </div>
            </div>
          </main>
        </motion.div>
      )}
    </>
  );
}
