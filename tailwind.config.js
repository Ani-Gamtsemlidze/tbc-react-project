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
      },
      boxShadow: {
        custom: "2px -3px 4px 4px #035c4147",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
