import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Berlin: ["Berlin", "sans-serif"],
        Raleway: ["Raleway", "sans-serif"],
      },
      colors: {
        navyBlue: "#243037",
        peerHubOrange: "#F15d22",
      },
    },
  },
  plugins: [],
};
export default config;
