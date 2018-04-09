/**
 * Container Generator
 */

const componentExists = require('../utils/componentExists');

module.exports = {
  description: 'Add a container component',
  prompts: [{
    type: 'list',
    name: 'type',
    message: 'Select the base component type:',
    default: 'Component',
    choices: () => ['Component', 'PureComponent', 'Stateless Function'],
  }, {
    type: 'input',
    name: 'name',
    message: 'What should it be called?',
    default: 'Language',
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
    name: 'wantHeaders',
    default: false,
    message: 'Do you want headers?',
  }, {
    type: 'confirm',
    name: 'wantMutation',
    default: true,
    message: 'Do you want a Mutation for this container? (e.g writing data)',
  }, {
    type: 'confirm',
    name: 'wantQuery',
    default: true,
    message: 'Do you want a Query for asynchronous flows? (e.g. fetching data)',
  }, {
    type: 'confirm',
    name: 'wantLoadable',
    default: true,
    message: 'Do you want to load resources asynchronously?',
  }],
  actions: (data) => {
    let componentTemplate;

    switch (data.type) {
      case 'Stateless Function': {
        componentTemplate = './container/stateless.hbs';
        break;
      }
      default: {
        componentTemplate = './container/class.hbs';
      }
    }

    const actions = [{
      type: 'add',
      path: '../../app/containers/{{properCase name}}/index.ts',
      templateFile: './container/index.hbs',
      abortOnFail: true,
    }, {
      type: 'add',
      path: '../../app/containers/{{properCase name}}/{{properCase name}}.tsx',
      templateFile: componentTemplate,
      abortOnFail: true,
    }, {
      type: 'add',
      path: '../../app/containers/{{properCase name}}/{{properCase name}}.spec.ts',
      templateFile: './container/spec.hbs',
      abortOnFail: true,
    }, {
      type: 'add',
      path: '../../app/containers/{{properCase name}}/styles.js',
      templateFile: './component/styles.hbs',
    }];

    if (data.wantLoadable) {
      actions.push({
        type: 'add',
        path: '../../app/containers/{{properCase name}}/Loadable.ts',
        templateFile: './component/loadable.hbs',
        abortOnFail: true,
      });
    }

    return actions;
  },
};
