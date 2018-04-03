/**
 * Component Generator
 */

/* eslint strict: ["off"] */

'use strict';

const componentExists = require('../utils/componentExists');

module.exports = {
  description: 'Add an unconnected component',
  prompts: [{
    type: 'confirm',
    name: 'wantTyping',
    default: true,
    message: 'Do you want to use TypeScript?',
  }, {
    type: 'list',
    name: 'type',
    message: 'Select the type of component',
    default: 'Stateless Function',
    choices: () => ['Stateless Function', 'PureComponent', 'Component'],
  }, {
    type: 'input',
    name: 'name',
    message: 'What should it be called?',
    default: 'Button',
    validate: (value) => {
      if ((/.+/).test(value)) {
        return componentExists(value) ? 'A component or container with this name already exists' : true;
      }

      return 'The name is required';
    },
  }, {
    type: 'input',
    name: 'tag',
    message: 'What tag is it?',
    default: 'div',
  }, {
    type: 'confirm',
    name: 'wantLoadable',
    default: false,
    message: 'Do you want to load the component asynchronously?',
  }],
  actions: (data) => {
    // Generate index.js, index.test.js and styles.js.
    let componentTemplate;

    const useTyping = data.wantTyping;

    switch (data.type) {
      case 'Stateless Function': {
        componentTemplate = `./component/stateless.${useTyping ? 'ts' : 'js'}.hbs`;
        break;
      }
      default: {
        componentTemplate = './component/class.js.hbs';
      }
    }

    const actions = [{
      type: 'add',
      path: `../../app/components/{{properCase name}}/index.${useTyping ? 'ts' : 'js'}`,
      templateFile: './component/index.js.hbs',
      abortOnFail: true,
    }, {
      type: 'add',
      path: `../../app/components/{{properCase name}}/{{properCase name}}.${useTyping ? 'tsx' : 'js'}`,
      templateFile: componentTemplate,
      abortOnFail: true,
    }, {
      type: 'add',
      path: '../../app/components/{{properCase name}}/{{properCase name}}.spec.js',
      templateFile: './component/test.js.hbs',
      abortOnFail: true,
    }, {
      type: 'add',
      path: '../../app/components/{{properCase name}}/styles.js',
      templateFile: './component/styles.js.hbs',
    }];

    // If want Loadable.js to load the component asynchronously
    if (data.wantLoadable) {
      actions.push({
        type: 'add',
        path: '../../app/components/{{properCase name}}/Loadable.js',
        templateFile: './component/loadable.js.hbs',
        abortOnFail: true,
      });
    }

    return actions;
  },
};
