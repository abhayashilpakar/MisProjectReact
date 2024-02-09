/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      aspectRatio: {
        "4/3": "4 / 3",
      },
      inset: {
        8.8: "8.8rem",
      },
      height: {
        25: "25rem",
      },
      width: {
        25: "25rem",
      },
      size: {
        25: "25rem",
        62: "62.5rem",
      },

      colors: {
        orange: {
          500: "#f59b16",
          550: "#cf8413",
        },
      },
    },
  },
  plugins: [],
};
