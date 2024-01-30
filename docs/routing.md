# Routing, layouts, and views

- [Overview](#overview)
- [Layouts](#layouts)
- [Views](#views)

## Overview

This project uses [Vue Router](dependencies.md#vue-router), which we initialize in `src/router/index.ts`, with routes defined in `src/router/routes.ts`. Inside the `src/router` folder, there are also two sub-folders, both containing route-specific components: `layouts` and `views`.

## Layouts

Every view component must use a layout component as its base and register it as `Layout`, as this convention helps us mock out layout components when testing views. Layouts usually aren't very complex, often containing only shared HTML like headers, footers, and navigation to surround the main content in the view.

## Views

Each view component will be used by at least one route in `src/router/routes.js`, to provide a template for the page. They can technically include some additional properties from Vue Router [to control navigation](https://router.vuejs.org/guide/advanced/navigation-guards.html), for example to [fetch data](https://router.vuejs.org/guide/advanced/data-fetching.html#fetching-before-navigation) before creating the component, but I recommend adding these guards to `src/router/routes.js` instead, as that behavior typically has much more to do with the route (and will sometimes be shared between routes) than it does the view component.

## Meta

The `meta` property of a route is used to provide additional information about the route, such as the page title, which can be used by the layout component to customize the page. It can also be used to control navigation, for example by specifying that a route requires authentication, or by specifying a redirect path.