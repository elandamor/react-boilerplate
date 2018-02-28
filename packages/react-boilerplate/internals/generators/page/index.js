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
    default: 'React.PureComponent',
    choices: () => ['React.PureComponent', 'React.Component'],
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
    // Generate index.js, index.test.js and styles.js
    const componentTemplate = './page/class.js.hbs';

    const actions = [{
      type: 'add',
      path: '../../app/pages/{{properCase name}}/index.js',
      templateFile: componentTemplate,
      abortOnFail: true,
    }, {
      type: 'add',
      path: '../../app/pages/{{properCase name}}/tests/index.test.js',
      templateFile: './page/test.js.hbs',
      abortOnFail: true,
    }, {
      type: 'add',
      path: '../../app/pages/{{properCase name}}/Loadable.js',
      templateFile: './component/loadable.js.hbs',
      abortOnFail: true,
    }, {
      type: 'add',
      path: '../../app/pages/{{properCase name}}/styles.js',
      templateFile: './page/styles.js.hbs',
      abortOnFail: true,
    }];

    return actions;
  },
};
