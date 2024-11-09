/** @type {import("prettier").Config} */
export default {
  plugins: ["prettier-plugin-astro"],
  overrides: [
    {
      files: ["*.astro", "**/*.ts", "**/*.vue"],
      options: {
        parser: "astro"
      },
    },
  ],
};
