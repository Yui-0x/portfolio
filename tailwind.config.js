/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  plugins: [require("daisyui")],

  daisyui: {
    themes: [
      {
        dark: {
          // primary: "#334EC7",
          secondary: "#C7485F",
          accent: "#C79D20",
          neutral: "#3D4451",
          "base-100": "#101019",
          info: "#a5f3fc",
          success: "#bef264",
          warning: "#fde047",
          error: "#f87171",
        },
      },
      {
        light: {
          // primary: "#fcba03",
          secondary: "#C7485F",
          accent: "#C79D20",
          neutral: "#3D4451",
          "base-100": "#f3f4f6",
          info: "#06b6d4",
          success: "#22c55e",
          warning: "#facc15",
          error: "#dc2626",
        },
      },
    ],
  },
};
