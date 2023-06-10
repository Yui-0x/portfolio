import SplashScreen from "@/components/splashscreen";
import { Html, Head, Main, NextScript } from "next/document";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function Document() {
  return (
    <Html lang="en">
      <Head />

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
