import fioriTools from "@sap-ux/eslint-plugin-fiori-tools";

export default [
  ...fioriTools.configs.recommended,

  {
    rules: {
      // Disallow var
      "no-var": "error",
      "no-var": "error",
      //test webhook
      //test webhook again 
      //test 

      // Prefer const when variables are never reassigned
      "prefer-const": "error",
      "prefer-const": "error",
      // Enforce double quotes
      quotes: ["error", "double"],

      // Require semicolons
      semi: ["error", "always"],

      // Disallow unused variables
      "no-unused-vars": "warn",

      // Require === instead of ==
      eqeqeq: ["error", "always"]
    }
  }
];
