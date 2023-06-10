import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import anime from "animejs";

const SplashScreen = ({ finishLoading, isVisible }) => {
  const [isMounted, setIsMounted] = useState(false);

  const animate = () => {
    const loader = anime.timeline({
      complete: () => finishLoading(),
    });
    loader.add({
      targets: "#text",
      opacity: 0,
      duration: 1000,
      delay: 1500,
      loop: true,
      easing: "linear",
    });
    // loader.add({
    //   targets: "#bg",
    //   translateX: 250,
    //   duration: 3000,
    // });
  };

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), 10);
    animate();
    return () => clearTimeout(timeout);
  });

  return (
    <>
      <div
        id="bg"
        className="h-screen w-full bg-fixed flex items-center justify-center"
        isMounted={isMounted}
      >
        <div id="text" className="text-3xl">
          <span className="font-bold">Miks Gregorio&#39;s</span> Portfolio
        </div>
      </div>
    </>
  );
};

export default SplashScreen;
