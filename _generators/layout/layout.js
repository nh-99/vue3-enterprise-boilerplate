// plop generator for layout
// ==========================================================================

export default function (plop) {
  plop.setGenerator('layout', {
    description: 'Add a layout',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your layout name?',
        validate: function (value) {
          if (/.+/.test(value) && value.indexOf('Layout') != -1) {
            return true
          }
          return 'name is required and must end with "Layout"'
        }
      }
    ],
    actions: () => {
      const actions = [
        {
          type: 'add',
          path: '../../src/router/layouts/{{properCase name}}.vue',
          templateFile: './layout.vue.hbs',
          abortOnFail: true
        },
        {
          type: 'add',
          path: '../../src/router/layouts/{{properCase name}}.spec.ts',
          templateFile: './layout.spec.ts.hbs',
          abortOnFail: true
        }
      ]

      return actions
    }
  })
}
