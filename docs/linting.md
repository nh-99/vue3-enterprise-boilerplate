# Linting & formatting

- [Languages](#languages)
- [Scripts](#scripts)
  - [Terminal](#terminal)
  - [Editor](#editor)
- [Configuration](#configuration)
- [FAQ](#faq)

This project uses ESLint, Stylelint, Markdownlint, and Prettier to catch errors and avoid bikeshedding by enforcing a common code style.

## Languages

- **TypeScript** is linted by ESLint and formatted by Prettier
- **HTML** (in templates and JSX) is linted by ESLint

## Scripts

There are a few different contexts in which the linters run.

### Terminal

```bash
# Lint all files, fixing many violations automatically
pnpm run lint
```

See `package.json` to update.

### Editor

In supported editors, all files will be linted and formatted on-save. See [editors.md](editors.md) for details.

## Configuration

This boilerplate ships with opinionated defaults, but you can edit each tools configuration in the following config files:

- [ESLint](https://eslint.org/docs/user-guide/configuring)
  - `.eslintrc.js`
  - `.eslintignore`
- [Prettier](https://prettier.io/docs/en/configuration.html)
  - `.prettierrc.js`
  - `.prettierignore`
