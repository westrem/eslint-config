# `@westrem/eslint-config`

Shareable config for ESLint

# How to use

**Install**

```
yarn add --dev @westrem/eslint-config eslint @typescript-eslint/eslint-plugin eslint-plugin-compat eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-security typescript
```

**Usage**

```
// eslintrc.json
{
  "extends": [
    ...,
    "@westrem/eslint-config"
  ]
}
```

```
// package.json
{
  "scripts": {
    ...,
    "lint:eslint": "./node_modules/.bin/eslint src --ignore-path .gitignore --ext .ts,.tsx --cache --cache-location .cache/eslint/ --max-warnings 0",
    "fix:eslint": "eslint src/** --ignore-path .gitignore --ext .ts,.tsx --cache --cache-location .cache/eslint/ --fix",
  }
}
```

----

## Sources

- [How to write shareable ESLint configs](https://eslint.org/docs/latest/extend/shareable-configs)
- [Config files](https://eslint.org/docs/latest/use/configure/configuration-files)
- [ESLint rules](https://eslint.org/docs/latest/rules/)
- [Typescript ESLint rules](https://typescript-eslint.io/rules/)
- [React plugin](https://github.com/jsx-eslint/eslint-plugin-react)

