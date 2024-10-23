/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      boxShadow: {
        custom: "0px 4px 4px rgba(0, 0, 0, 0.15)",
        "inset-custom": "inset 0px 4px 0px 0px rgba(255, 255, 255, 0.6)",
      },
      colors: {
        text: {
          primary: "#071D55",
          secondary: "#8D8D8D"
        },
        bg: {
          primary: "#3556AB",
          secondary: "#F3F3F3",
        },
      },
    },
  },
  plugins: [],
};
