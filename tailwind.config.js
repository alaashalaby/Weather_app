/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        dark: {
          primary: "#131315",
          secondary: "#1C1C1E",
          thirty: "#1A1A1C",
          accent: "#FCFCFD",
          purpleColor: "#B1A1E4",
        },
        light: {
          50: "#8be0f2",
          100: "#5EC2F2",
          150: "#b5edf9",
          200: "#396BAE",
          250: "#39C7E5",
          300: "#056072",
          350: "#082276",
          400: "#4A6FA1",
          450: "rgb(114, 126, 142)",
        },
      },
      boxShadow: {
        customShadow: "0px 1px 5px hsla(0,0%,0%,0.5)",
      },
      backgroundImage: {
        "linear-light":
          "linear-gradient(to bottom,#B1EAF6,#ACE9F5,#38c8e6, #83DDF0)",
        "linear-dark": "linear-gradient(to bottom, #131315, #131315)",
      },
    },
  },
  plugins: [],
};
