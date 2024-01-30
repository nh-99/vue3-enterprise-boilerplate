# Vue Enterprise Boilerplate (forked)

![static-analysis-workflow](https://github.com/nh-99/vue3-enterprise-boilerplate/actions/workflows/static-analysis.yaml/badge.svg)

This is an ever-evolving, very opinionated architecture and dev environment for new Vue SPA projects using [Vite](https://vitejs.dev/). Questions, feedback, and for now, even bikeshedding are welcome. 😄

> A big thanks to [Chris Fritz](https://www.patreon.com/chrisvuefritz) for the incredible work that he did to make this resource possible.

## Features

- [**Thorough documentation**](#documentation): Written with the same care as Vue's core docs to quickly train new team members and consolidate knowledge.
- [**Guaranteed consistency**](docs/linting.md): Opinionated linting for Vue, JavaScript/JSON, SCSS, and Markdown, integrated into Visual Studio Code and run against staged files on pre-commit.
- [**First-class tests**](docs/tests.md): Practice test-driven development with both unit and end-to-end tests. Unit tests with Jest live as first-class citizens alongside your source files, while Cypress provides reliable end-to-end tests in an intuitive GUI for development.
- [**Speedy development**](docs/development.md): Between [configurable generators](docs/development.md#generators), [handy aliases](docs/development.md#aliases), and [global base components](docs/development.md#base-components), your productivity will skyrocket.

## Getting started

```bash
# 1. Clone the repository.
git clone https://github.com/nh-99/vue-enterprise-boilerplate.git my-new-project

# 2. Enter your newly-cloned folder.
cd my-new-project

# 3. Install dependencies. Make sure pnpm is installed: https://pnpm.io
pnpm run install

# 4. Replace this README's CI badge with a note about when you started
# and a link to a compare URL, so that you can always get an overview
# of new features added to the boilerplate since you cloned.
node _start.js

# 5. Delete the start script, as there can be only one beginning.
rm _start.js

# 6. Read the documentation linked below for "Setup and development".
```

## Documentation

This project includes a `docs` folder with more details on:

1.  [Setup and development](docs/development.md)
1.  [Architecture](docs/architecture.md)
1.  [Dependency/technology breakdown](docs/dependencies.md)
1.  [Routing, layouts, and views](docs/routing.md)
1.  [Pinia for state management](https://pinia.vuejs.org/)
1.  [Tests and mocking the API](docs/tests.md)
1.  [Linting and formatting](docs/linting.md)
1.  [Editor integration](docs/editors.md)
1.  [Building and deploying to production](docs/production.md)

## FAQ

**Why would I use this boilerplate instead of generating a new project with [Vite](https://vitejs.dev/) directly?**

Vite aims for flexibility, making it as simple as possible for any team to set up a new project, no matter how big or small, whether it's an app or a library, or what languages and technologies are being used.

This boilerplate makes more assumptions. It assumes you're building a large app, possibly developed by a large team. It also makes a lot of default choices for you, based on what tends to work well for large, enterprise projects. At the same time, it aims to educate and empower users to configure these defaults to ideally suit their specific app and team.

**Why would I use this boilerplate instead of [Nuxt](https://nuxtjs.org/)?**

Nuxt is like a really smart personal assistant, immediately making you more productive by taking care of many concerns _for you_. This boilerplate is more of a personal coach, aiming to educate and empower users to essentially configure their _own_ framework, ideally suited to their app and team.

If what you're building is very well-defined, with requirements and technical challenges that won't drastically change over time, I'd probably recommend Nuxt instead. For the needs of common applications, it's more than up to the task. If you're a startup trying to prove product-market fit and your primary goal is initial development speed, that's also a point in Nuxt's favor.

Here's when you might prefer building a project off the boilerplate instead:

- The requirements for the product are very likely to change over time and you want to maintain maximum flexibility and control.
- You'd like to focus on developing skills that will transfer across _any_ Vue project.
- You're working in a large team, so need tooling to help everyone avoid common mistakes, write in a consistent style, and avoid bikeshedding in PRs.

Finally, it's not an either-or situation. This boilerplate demonstrates many useful patterns for building robust applications that can also be applied to Nuxt apps. That means you could build a project with Nuxt, while still using this boilerplate as a study guide.

**This isn't exactly what I'm looking for. Where can I find other boilerplates and similar projects?**

See the [awesome-vue](https://github.com/vuejs/awesome-vue#scaffold) repo for other great projects in the Vue ecosystem.
