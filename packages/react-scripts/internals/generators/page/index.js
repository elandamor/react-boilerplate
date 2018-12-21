/**
 * Container Generator
 */

const path = require('path');
const componentExists = require('../utils/componentExists');

module.exports = {
  description: 'Add a container component',
  prompts: [{
    type: 'list',
    name: 'type',
    message: 'Select the base component type:',
    default: 'PureComponent',
    choices: () => ['PureComponent', 'Component'],
  }, {
    type: 'input',
    name: 'name',
    message: 'What should it be called?',
    default: 'Home',
    validate: (value) => {
      if ((/.+/).test(value)) {
        return componentExists(value) ? 'A page with this name already exists' : true;
      }

      return 'The name is required';
    },
  }],
  actions: () => {
    const componentTemplate = './page/index.hbs';

    const actions = [{
      type: 'add',
      path: path.join(process.cwd(), 'app/pages/{{properCase name}}/index.tsx'),
      templateFile: componentTemplate,
      abortOnFail: true,
    }, {
      type: 'add',
      path: path.join(process.cwd(), 'app/pages/{{properCase name}}/{{properCase name}}.spec.tsx'),
      templateFile: './page/spec.hbs',
      abortOnFail: true,
    }, {
      type: 'add',
      path: path.join(process.cwd(), 'app/pages/{{properCase name}}/Loadable.ts'),
      templateFile: './component/loadable.hbs',
      abortOnFail: true,
    }, {
      type: 'add',
      path: path.join(process.cwd(), 'app/pages/{{properCase name}}/styles.ts'),
      templateFile: './page/styles.hbs',
      abortOnFail: true,
    }];

    return actions;
  },
};
