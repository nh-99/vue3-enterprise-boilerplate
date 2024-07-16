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
      },
      {
        type: 'confirm',
        name: 'isBase',
        default: false,
        message:
          'Is this a base component? (Base components are globally registered, and also require Storybook stories and tests)'
      }
    ],
    actions: (data) => {
      let actions = [
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

      if (data.isBase) {
        actions = actions.concat([
          {
            type: 'add',
            path: '../../src/components/{{properCase name}}.stories.ts',
            templateFile: './component.stories.ts.hbs',
            abortOnFail: true
          }
        ])
      }

      return actions
    }
  })
}
