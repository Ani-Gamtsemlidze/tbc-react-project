/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        mainColor: "#fff7ec",
        greenColor: "#035C41",
        // darkTextColor: "#E2E8F0 ",
        darkTextColor: "#E2E8F0 ",
        darkTextMain: "#92a7dd",
        darkBgColor: "#161D2f",
        darkSecondaryColor: "#45547a",
        darkContentColor: "#334255",
      },
      boxShadow: {
        custom: "2px -3px 4px 4px #035c4147",
        customDark: "2px -3px 4px 4px #fff",
        shadowDark: "-2px 0px 10px -1px #fff",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
