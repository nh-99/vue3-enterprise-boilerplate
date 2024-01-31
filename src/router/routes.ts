import HomeView from './views/HomeView.vue'

export default [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      pageTitle: 'Home',
      displayTitle: true,
      navbarDisplay: {
        title: 'Home'
      }
    }
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('./views/AboutView.vue'),
    meta: {
      pageTitle: 'About',
      displayTitle: true,
      navbarDisplay: {
        title: 'About',
        parent: null // null means it's a top-level route. Otherwise, specify the parent route name.
        // ...
        // you could use this to specify other metadata, like icons, etc.
      }
    }
  }
  // PLOP: ROUTE - DO NOT REMOVE COMMENT
]
