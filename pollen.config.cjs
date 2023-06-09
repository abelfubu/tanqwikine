const { defineConfig } = require("pollen-css/utils");

const colors = {
  red: {
    50: "#fbedee",
    100: "#f6d3d6",
    200: "#f0b6ba",
    300: "#e9989e",
    400: "#e5828a",
    500: "#e06c75",
    600: "#dc646d",
    700: "#d85962",
    800: "#d34f58",
    900: "#cb3d45",
    A100: "#ffffff",
    A200: "#ffe6e8",
    A400: "#ffb3b7",
    A700: "#ff9a9f",
  },
  blue: {
    50: "#e9eff3",
    100: "#c7d7e2",
    200: "#a2bdce",
    300: "#7da3ba",
    400: "#618fac",
    500: "#457b9d",
    600: "#3e7395",
    700: "#36688b",
    800: "#2e5e81",
    900: "#1f4b6f",
    A100: "#add8ff",
    A200: "#7ac0ff",
    A400: "#47a8ff",
    A700: "#2e9cff",
  },
  green: {
    50: "#f3f8ef",
    100: "#e0edd7",
    200: "#cce1bc",
    300: "#b7d5a1",
    400: "#a7cc8d",
    500: "#98c379",
    600: "#90bd71",
    700: "#85b566",
    800: "#7bae5c",
    900: "#6aa149",
    A100: "#fdfffc",
    A200: "#dcffc9",
    A400: "#bbff96",
    A700: "#abff7c",
  },
  primary: {
    50: "#fffbe0",
    100: "#fff5b3",
    200: "#ffee80",
    300: "#ffe74d",
    400: "#ffe226",
    500: "#ffdd00",
    600: "#ffd900",
    700: "#ffd400",
    800: "#ffcf00",
    900: "#ffc700",
    A100: "#ffffff",
    A200: "#fffcf2",
    A400: "#ffefbf",
    A700: "#ffe9a6",
  },
  warn: {
    50: "#fcf6e8",
    100: "#f7e8c5",
    200: "#f2d99f",
    300: "#ecca78",
    400: "#e8be5b",
    500: "#e4b33e",
    600: "#e1ac38",
    700: "#dda330",
    800: "#d99a28",
    900: "#d18b1b",
    A100: "#ffffff",
    A200: "#ffedd3",
    A400: "#ffd7a0",
    A700: "#ffcd86",
  },
  dark: {
    100: "#70777f",
    200: "#50555e",
    300: "#50555e50",
    400: "#282c34",
    500: "#00000d",
  },
  light: {
    400: "#ffffffaa",
  },
};

module.exports = defineConfig({
  modules: {
    font: false,
    color: Object.entries(colors).reduce((acc, [key, value]) => {
      for (k in value) {
        acc[`${key}-${k}`] = value[k];
      }
      return acc;
    }, {}),
    border: {
      normal: "0 0 0 1px var(--color-light-400)",
      hover: "0 0 0 2px var(--color-light-400)",
    },
  },
});
