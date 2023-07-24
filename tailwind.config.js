/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "#000",
        gray: {
          100: "#222730",
          200: "#141820"
        },
        darkgray: "#999",
        white: "#fff",
        deepskyblue: "#57b8ff",
        darkslategray: {
          100: "#3b3d46",
          200: "#2a313c"
        },
        gainsboro: "rgba(223, 223, 223, 0.8)",
        lightslategray: "#80858f",
        gold: "#fac422"
      },
      fontFamily: {
        orbitron: "Orbitron",
        roboto: "Roboto"
      }
    }
  },
  corePlugins: {
    preflight: false
  }
};
