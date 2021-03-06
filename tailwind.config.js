module.exports = {
  purge: [
    "src/**/*.js",
    "src/**/*.jsx",
    "src/**/*.ts",
    "src/**/*.tsx",
    "public/**/*.html",
  ],
  darkMode: false,
  theme: {
    extend: {
      fontSize: {
        "12xl": "12rem",
      },
      colors: {
        primary: "#2f363d",
        secondary: "#3e4a4c",
        tertiary: "#525a5c",
        accent: "#78ce6d",
        "accent-light": "#8cd582",
      },
      inset: {
        34: "8.5rem",
      },
      maxHeight: {
        "1/2": "50vh",
        "3/5": "60vh",
        "4/5": "80vh",
      },
      width: {
        "3/10": "30%",
        "6/10": "60%",
        "9/10": "90%",
        "65p": "65%",
      },
    },
    container: {
      center: true,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/custom-forms")],
};
