/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        body: "Open Sans",
        header: "Raleway",
      },
      colors: {
        primaryDarkBlue: "hsl(243, 87%, 12%)",
        primaryDesaturatedBlue: "hsl(238, 22%, 44%)",
        accentBrightBlue: " hsl(224, 93%, 58%)",
        accentModerateCyan: "hsl(170, 45%, 43%)",
        neturalGrayishBlue: "hsl(240, 75%, 98%)",
        neturalLightGray: "hsl(0, 0%, 75%)",
        productSection: "#f8f8fe",
      },
      backgroundImage: {
        mobileCurve: "url('./images/bg-curve-mobile.svg')",
        desktopCurve: "url('./images/bg-curve-desktop.svg')",
      },
      backgroundSize: {
        mobileCurve: "100%",
      },
    },
  },
  plugins: [],
};
