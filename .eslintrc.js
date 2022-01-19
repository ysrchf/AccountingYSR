module.exports = {
  root: true,
  extends: ["eslint:recommended", "prettier", "next", "next/core-web-vitals"],
  env: {
    es2021: true,
    node: true,
  },
  rules: {
    indent: "off",
    "linebreak-style": ["error", "unix"],
    quotes: [
      "error",
      "double",
      { avoidEscape: true, allowTemplateLiterals: true },
    ],
    semi: ["error", "never"],
    "no-console": "error",
    "no-implicit-globals": "error",
    "no-warning-comments": ["error", { terms: ["fixme", "todo"] }],
    "newline-before-return": "error",
    curly: "error",
    "padded-blocks": ["error", "never"],
    "space-before-blocks": "error",
  },
}
