// plop generator for view
// ==========================================================================

export default function (plop) {
  plop.setGenerator('view', {
    description: 'Create a new view',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your view name?',
        validate: function (value) {
          if (/.+/.test(value) && value.indexOf('View') != -1) {
            return true
          }

          return 'name is required and must end with View'
        }
      },
      {
        type: 'input',
        name: 'path',
        message: 'What is your view path? (e.g. /about)',
        validate: function (value) {
          if (/.+/.test(value) && value.indexOf('/') === 0) {
            return true
          }

          return 'path is required and must start with /'
        }
      },
      {
        type: 'confirm',
        name: 'displayTitle',
        message: 'Do you want to display the title in the navbar?',
        default: true
      }
    ],
    actions: [
      {
        type: 'add',
        path: '../../src/router/views/{{name}}.vue',
        templateFile: 'view.vue.hbs',
        data: {
          name: '{{name}}'
        }
      },
      {
        type: 'add',
        path: '../../src/router/views/{{name}}.spec.ts',
        templateFile: 'view.spec.ts.hbs',
        data: {
          name: '{{name}}'
        }
      },
      // Modify the routes.ts file at the line where it says "PLOP: ROUTE IMPORT - DO NOT REMOVE COMMENT"
      // and add a new route like:
      // {
      //   path: '/about',
      //   name: 'about',
      //   // route level code-splitting
      //   // this generates a separate chunk (About.[hash].js) for this route
      //   // which is lazy-loaded when the route is visited.
      //   component: () => import('./views/AboutView.vue'),
      //   meta: {
      //     pageTitle: 'About',
      //     displayTitle: true,
      //     navbarDisplay: {
      //       title: 'About',
      //       parent: null // null means it's a top-level route. Otherwise, specify the parent route name.
      //       // ...
      //       // you could use this to specify other metadata, like icons, etc.
      //     }
      //   }
      // }
      {
        type: 'modify',
        path: '../../src/router/routes.ts',
        pattern: /}\n\s\s\/\/ PLOP: ROUTE - DO NOT REMOVE COMMENT/gm,
        template: `},
  {
    path: '{{path}}',
    name: '{{name}}',
    component: () => import('./views/{{name}}.vue'),
    meta: {
      pageTitle: '{{name}}',
      displayTitle: {{displayTitle}},
      navbarDisplay: {
        title: '{{name}}',
        parent: null
      }
    }
  }
  // PLOP: ROUTE - DO NOT REMOVE COMMENT`
      }
    ]
  })
}
