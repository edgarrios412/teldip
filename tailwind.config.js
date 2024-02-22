/** @type {import('tailwindcss').Config} */
// const {nextui} = require("@nextui-org/react");
import { nextui } from "@nextui-org/react";

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    //   "./node_modules/tw-elements-react/dist/js/**/*.js",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  // theme: {
  //   extend: {},
  // },
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            primary:{
              DEFAULT:"#BEF264"
            },
            focus: "#BEF264",
            secondary:{
              DEFAULT:"#BEF264"
            }
          },
        },
        dark: {
          colors: {
            primary: {
              DEFAULT: "#BEF264",
            },
            focus: "#BEF264",
          },
        },
      },
    }),
  ],
};
