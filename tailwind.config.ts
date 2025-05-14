import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primary: "#0ea5e9",
      secondary: "#06b6d4",
      accent: "#3b82f6",
      background: "#f9fafb",
      text: "#111827",
      border: "#e5e7eb",
      error: "#ef4444",
      success: "#10b981",
      warning: "#f59e0b",
      first: "#234079",
      second: "#0f2044",
      third: "#080f22",
      white: "#ffffff", // You still need defaults like white and black
      black: "#000000",
      navy: {
        700: "#1e3a8a",
        800: "#1e40af",
        950: "#0c0f1f",
      },
    },
    extend: {
      backgroundImage: {
        "hero-gradient":
          "linear-gradient(to bottom, #234079, #0f2044, #080f22)",
      },
    },
  },
  plugins: [],
};

export default config;
