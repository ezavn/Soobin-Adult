/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        mulish: ["Mulish", "serif"],
        ms: ["Ms Madi", "cursive"],
      },
      colors: {
        white: "#fff",
        black: "#1E1E20",
        yellow: "#FFD128",
        lightYellow: "#FFDD5E",
        green: "#023E26",
        red: "#692F2E",
      },
      margin: {
        section: "80px",
        sectionMB: "50px",
      },
      spacing: {
        section: "80px",
        sectionMB: "50px",
      },
    },
  },
  plugins: [],
};
