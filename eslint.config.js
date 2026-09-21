const js = require("@eslint/js");
const globals = require("globals");

module.exports = [
  { ignores: ["node_modules/"] },
  js.configs.recommended,
  {
    languageOptions: {
      sourceType: "commonjs",
      globals: { ...globals.browser, ...globals.node },
    },
  },
  {
    // app.js dùng hàm từ bmi.js (nạp bằng thẻ <script>, không import)
    files: ["app.js"],
    languageOptions: {
      globals: { calculateBMI: "readonly", classifyBMI: "readonly" },
    },
  },
];
