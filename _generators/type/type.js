// plop generator to create a typescript type file, with an example of the type
// and an enum type if specified. creates a spec file for the type as well.
// ==========================================================================

function registerHandleBarHelpers(plop) {
  plop.setHelper('split', (str, ch) => {
    return str !== '' && typeof str === 'string' ? str.split(ch || ',') : ''
  })
}

export default function (plop) {
  registerHandleBarHelpers(plop)
  plop.setGenerator('type', {
    description:
      'Create a new typescript type file, with an example of the type and an enum type if specified. Creates a spec file for the type as well.',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your type name?',
        validate: (value) => {
          if (/.+/.test(value)) {
            return true
          }
          return 'name is required'
        }
      },
      {
        type: 'confirm',
        name: 'hasEnum',
        message: 'Does your type have an enum?',
        default: false
      },
      {
        type: 'input',
        name: 'enumName',
        message: 'What is your enum name?',
        when: (answers) => answers.hasEnum,
        validate: (value) => {
          if (/.+/.test(value)) {
            return true
          }
          return 'name is required'
        }
      },
      {
        type: 'input',
        name: 'enumValues',
        message: 'What are your enum values? (comma separated)',
        when: (answers) => answers.hasEnum,
        validate: (value) => {
          if (/.+/.test(value)) {
            return true
          }
          return 'values are required'
        }
      }
    ],
    actions: (data) => {
      const actions = [
        {
          type: 'add',
          path: '../../src/types/{{camelCase name}}.ts',
          template: `export type {{properCase name}} = {
  id: string
  name: string
  {{#if hasEnum}}
  enum: {{properCase enumName}}
  {{/if}}
}`
        },
        {
          type: 'add',
          path: '../../src/types/{{camelCase name}}.spec.ts',
          template: `import { describe, expect, it } from 'vitest'
import { type {{properCase name}} } from './{{camelCase name}}';

describe('{{camelCase name}}', () => {
  it('should work', () => {
    const {{camelCase name}}: {{properCase name}} = {
      id: '123',
      name: 'test'
    };
    expect({{camelCase name}}.id).toEqual('123');
  });
});`
        }
      ]

      if (data.hasEnum) {
        actions.push({
          type: 'modify',
          path: '../../src/types/{{camelCase name}}.ts',
          // End of file pattern
          pattern: /(})$/,
          template: `}\nexport enum {{properCase enumName}} {
  {{#each (split enumValues ',')}}
  {{this}},
  {{/each}}
}`
        })
      }

      return actions
    }
  })
}
