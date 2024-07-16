# Setup and development

- [Setup and development](#setup-and-development)
  - [First-time setup](#first-time-setup)
  - [Installation](#installation)
  - [Dev server](#dev-server)
    - [Developing with the production API](#developing-with-the-production-api)
  - [Generators](#generators)
  - [Aliases](#aliases)
  - [Globals](#globals)
    - [Base components](#base-components)
  - [Docker (optional)](#docker-optional)

## First-time setup

Make sure you have the following installed:

- [Node](https://nodejs.org/en/) (at least the latest LTS)
- [pnpm](https://pnpm.io)

Then update the following files to suit your application:

- `src/app.config.json` (provides metadata about your app)

## Installation

```bash
# Install dependencies from package.json
pnpm install
```

## Dev server

> Note: If you're on Linux and see an `ENOSPC` error when running the commands below, you must [increase the number of available file watchers](https://stackoverflow.com/questions/22475849/node-js-error-enospc#answer-32600959).

```bash
# Launch the dev server
pnpm run dev

# Launch the dev server and automatically open it in
# your default browser when ready
pnpm run dev --open
```

### Developing with the production API

By default, dev and tests filter requests through [the mock API](/docs/tests.md#the-mock-api) in `tests/mock-api`. To test directly against a local/live API instead, run dev and test commands with the `API_BASE_URL` environment variable set. For example:

```bash
# To develop against a local backend server
API_BASE_URL=http://localhost:3000 pnpm run dev

# To test and develop against a production server
API_BASE_URL=https://example.io pnpm run dev:e2e
```

## Generators

This project includes generators to speed up common development tasks. Commands include:

```bash
# Generate a new component with adjacent unit test
pnpm run generate:component

# Generate a new view component with adjacent unit test
pnpm run generate:view

# Generate a new layout component with adjacent unit test
pnpm run generate:layout

# Generate a new Pinia store with adjacent unit test
pnpm run generate:store

# Generate a new TypeScript type file with adjacent unit test
pnpm run generate:type
```

Update existing or create new generators in the `_generators` folder, with help from the [plop docs](https://plopjs.com/documentation/#getting-started).

## Storybook

We use Storybook to document custom components for re-use by other developers on the project. You can access component documentation by running Storybook:

```bash
# Run the interactive Storybook browser app
pnpm run storybook
```

You can build a static version of this documentation, i.e. for serving on an internal site, by running:

```bash
# Build the Storybook docs into a static app
pnpm run build-storybook
```

## Aliases

To simplify referencing local modules and refactoring, you can set aliases to be shared between dev and unit tests in `vite.config.ts`. As a convention, this project uses an `@` prefix to denote aliases.

## Globals

### Base components

[Base components](https://vuejs.org/v2/style-guide/#Base-component-names-strongly-recommended) (a.k.a. presentational, dumb, or pure components) that apply app-specific styling and conventions should all begin with the `_base-` prefix. Since these components are typically used in place of raw HTML element (and thus used as frequently), they're automatically globally registered for convenience. This means you don't have to import and locally register them to use them in templates.

These components also require special documentation. We use the Storybook library to enable this functionality. Storybook allows you to document your UI components via stories, which can be created to outline common scenarios for using a component. For more about Storybook, please read here.
