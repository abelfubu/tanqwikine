const { defineConfig } = require("pollen-css/utils");
const { colors } = require("./src/theme/colors.cjs");

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
