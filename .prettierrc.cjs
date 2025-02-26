/** @type { import("prettier").Config } */
module.exports = {
  trailingComma: "es5",
  tabWidth: 2,
  semi: true,
  singleQuote: true,
  // printWidth: 80, // Adjust based on preference
  // jsxSingleQuote: false,
  // bracketSpacing: true,
  plugins: ["prettier-plugin-tailwindcss"]
};
