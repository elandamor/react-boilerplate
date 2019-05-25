/**
 * Component Generator
 */

/* eslint strict: ["off"] */

'use strict';

const path = require('path');
const paths = require('../../paths');
const componentExists = require('../utils/componentExists');

module.exports = {
  description: 'Add an unconnected component',
  prompts: [
    {
      type: 'list',
      name: 'type',
      message: 'Select the type of component',
      default: 'Functional',
      choices: () => ['Functional', 'Class'],
    },
    {
      type: 'input',
      name: 'name',
      message: 'What should it be called?',
      default: 'Button',
      validate: (value) => {
        if (/.+/.test(value)) {
          return componentExists(value)
            ? 'A component or container with this name already exists'
            : true;
        }

        return 'The name is required';
      },
    },
    {
      type: 'input',
      name: 'tag',
      message: 'What tag is it?',
      default: 'div',
    },
    {
      type: 'confirm',
      name: 'wantLoadable',
      default: false,
      message: 'Do you want to load the component asynchronously?',
    },
  ],
  actions: (data) => {
    let componentTemplate;

    switch (data.type) {
      case 'Functional': {
        componentTemplate = './component/function.hbs';
        break;
      }
      default: {
        componentTemplate = './component/class.hbs';
      }
    }

    const actions = [
      {
        type: 'add',
        path: path.join(paths.appComponents, '{{properCase name}}/index.tsx'),
        templateFile: componentTemplate,
        abortOnFail: true,
      },
      {
        type: 'add',
        path: path.join(
          paths.appComponents,
          '{{properCase name}}/{{properCase name}}.spec.tsx'
        ),
        templateFile: './component/spec.hbs',
        abortOnFail: true,
      },
      {
        type: 'add',
        path: path.join(paths.appComponents, '{{properCase name}}/styles.ts'),
        templateFile: './component/styles.hbs',
      },
    ];

    // If want Loadable.ts to load the component asynchronously
    if (data.wantLoadable) {
      actions.push({
        type: 'add',
        path: path.join(
          paths.appComponents,
          '{{properCase name}}/Loadable.tsx'
        ),
        templateFile: './component/loadable.hbs',
        abortOnFail: true,
      });
    }

    return actions;
  },
};
