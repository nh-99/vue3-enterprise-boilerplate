// plop generator for component
// ==========================================================================

export default function (plop) {
  plop.setGenerator('component', {
    description: 'Add a component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your component name?'
      }
    ],
    actions: () => {
      const actions = [
        {
          type: 'add',
          path: '../../src/components/{{properCase name}}.vue',
          templateFile: './component.vue.hbs',
          abortOnFail: true
        },
        {
          type: 'add',
          path: '../../src/components/{{properCase name}}.spec.ts',
          templateFile: './component.spec.ts.hbs',
          abortOnFail: true
        }
      ]

      return actions
    }
  })
}
