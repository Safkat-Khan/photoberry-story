/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        xing: "Dancing Script ,cursive",
        vibes: " Great Vibes, cursive",
      },
    },
  },
  plugins: [require("daisyui")],
};
