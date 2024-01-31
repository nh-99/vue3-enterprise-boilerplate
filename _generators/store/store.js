// plop generator for a pinia store. it includes options such as adding axios to
// use the store with API calls
// =============================================================================

export default function (plop) {
  plop.setGenerator('store', {
    description: 'Add a store',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your store name?'
      },
      {
        type: 'confirm',
        name: 'axios',
        message: 'Do you want to use axios for REST/GraphQL requests?',
        default: true
      },
      {
        type: 'confirm',
        name: 'mockEndpoint',
        message: 'Do you want to create a mock endpoint for testing?',
        default: true
      }
    ],
    actions: (data) => {
      const actions = [
        {
          type: 'add',
          path: '../../src/stores/{{camelCase name}}.ts',
          templateFile: './store.ts.hbs',
          abortOnFail: true
        }
      ]

      if (data.axios) {
        actions.push({
          type: 'add',
          path: '../../src/stores/{{camelCase name}}.spec.ts',
          templateFile: './store.spec.ts.hbs',
          abortOnFail: true
        })
      }

      if (data.mockEndpoint) {
        actions.push({
          type: 'add',
          path: '../../src/mocks/resources/{{camelCase name}}.ts',
          templateFile: './mock.ts.hbs',
          abortOnFail: true
        })
        actions.push({
          type: 'modify',
          path: '../../src/mocks/handlers.ts',
          pattern: /(\/\/ pinia-mock-import - DO NOT REMOVE)/g,
          template: "$1\nimport get{{properCase name}} from './resources/{{camelCase name}}'"
        })
        actions.push({
          type: 'modify',
          path: '../../src/mocks/handlers.ts',
          pattern: /(\)\n\s\s\/\/ pinia-mock-handler - DO NOT REMOVE)/g,
          template: '),\n  get{{properCase name}}()\n  // pinia-mock-handler - DO NOT REMOVE'
        })
      }

      return actions
    }
  })
}
