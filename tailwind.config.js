import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "featured-bg": "url('./src/assets/home/featured.jpg')",
      },
    },
  },
  plugins: [daisyui],
};
