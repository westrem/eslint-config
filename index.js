module.exports = {
  "env": {
    "browser": true,
    "es2022": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:security/recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:compat/recommended",
    "prettier"
  ],
  "settings": {
    "react": {
      "version": "detect"
    }
  },
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaVersion": 2022,
    "ecmaFeatures": {
      "jsx": true
    },
    "lib": "ESNext",
    "sourceType": "module",
    "project": true,        // find the tsconfig.json nearest each source file
  },
  "plugins": ["react", "@typescript-eslint", "security"],
  "rules": {
    "no-duplicate-imports": "error",
    "react/prop-types": "off",
    "react/no-unescaped-entities": ["error", { "forbid": [">", "}"] }],
    "react/display-name": "error",
    "no-empty": ["error", { "allowEmptyCatch": true }],
    "@typescript-eslint/array-type": "error",
    "@typescript-eslint/ban-ts-comment": "off",
    "no-unused-vars": [
      "error",
      {
        "vars": "all",
        "varsIgnorePattern": "^_",
        "args": "after-used",
        "ignoreRestSiblings": true,
        "argsIgnorePattern": "^_",
        "destructuredArrayIgnorePattern": "^_"
      }
    ],
    "no-constant-binary-expression": "error",
    "no-self-compare": "error",
    "no-template-curly-in-string": "error",
    "no-unreachable-loop": "error",
    "default-case-last": "error",
    "eqeqeq": ["error", "always"],
    "id-length": ["error", { "min": 3, "exceptions": ["i", "id", "as", "cx"] }],
    "no-array-constructor": "error",
    "no-console": "error",
    "no-alert": "error",
    "no-debugger": "error",
    "no-eval": "error",
    "no-new-object": "error",
    "no-new-wrappers": "error",
    "no-param-reassign": "error",
    "no-shadow": "error",
    "no-var": "error",
    "object-shorthand": ["error", "always"],
    "prefer-const": "error",
    "prefer-object-has-own": "error",
    "prefer-object-spread": "error",
    "prefer-rest-params": "error",
    "prefer-spread": "error",
    "radix": "error",
    "spaced-comment": [
      "error",
      "always",
      {
        "block": { "exceptions": ["-", "*", "/"], "markers": ["/"] },
        "line": { "exceptions": ["-", "*", "/"], "markers": ["/"] }
      }
    ],
    "yoda": ["error", "never", { "exceptRange": true }],
    "no-restricted-syntax": [
      "error",
      {
        "selector": "TSEnumDeclaration",
        "message": "Don't declare enums"
      }
    ],
    "@typescript-eslint/no-use-before-define": [
      "error",
      { "functions": false }
    ],
    "@typescript-eslint/naming-convention": [
      "error",
      {
        "selector": "default",
        "format": ["camelCase"],
        "leadingUnderscore": "allow",
        "filter": {
          "regex": "^(ds-.*)|Element$|Component$", // ds- as in design system
          "match": false
        }
      },
      {
        "selector": "function",
        "format": ["camelCase", "PascalCase"]
      },
      {
        "selector": "variable",
        "format": ["camelCase", "UPPER_CASE", "PascalCase"],
        "leadingUnderscore": "allow"
      },
      {
        "selector": "parameter",
        "format": ["camelCase"],
        "leadingUnderscore": "allow",
        "filter": {
          "regex": "^Element$|Component$",
          "match": false
        }
      },
      {
        "selector": "property",
        "format": ["camelCase", "PascalCase"],
        "leadingUnderscore": "allow",
        "filter": {
          "regex": "^(ds-.*)|Element$|Component$", // ds- as in design system
          "match": false
        }
      },
      {
        "selector": "typeLike",
        "format": ["PascalCase"]
      }
    ],
    "@typescript-eslint/no-unused-vars": 0,
    "@typescript-eslint/consistent-type-definitions": ["error", "type"],
    "@typescript-eslint/consistent-type-exports": "error",
    "@typescript-eslint/no-unnecessary-boolean-literal-compare": "error",
    "@typescript-eslint/no-unnecessary-condition": "error",
    "@typescript-eslint/non-nullable-type-assertion-style": "error",
    "@typescript-eslint/prefer-nullish-coalescing": "error",
    "@typescript-eslint/prefer-optional-chain": "error",
    "@typescript-eslint/prefer-string-starts-ends-with": "error",
    "@typescript-eslint/prefer-ts-expect-error": "error",
    "@typescript-eslint/require-array-sort-compare": "error",
    "react/button-has-type": "error",
    "react/destructuring-assignment": ["error", "always"],
    "react/forbid-component-props": ["error", { "forbid": ["style"] }],
    "react/forbid-dom-props": ["error", { "forbid": ["style"] }],
    "react/hook-use-state": "error",
    "react/no-array-index-key": "error",
    "react/no-danger": "error",
    "react/no-unstable-nested-components": ["error", { "allowAsProps": true }],
    "security/detect-object-injection": 0
  }
}