/**
 * Container Generator
 */

const fs = require('fs');
const path = require('path');
const paths = require('../../paths');
const componentExists = require('../utils/componentExists');

function trimTemplateFile(template) {
  // Loads the template file and trims the whitespace and then returns the content as a string.
  return fs
    .readFileSync(path.join(__dirname, `./${template}`), 'utf8')
    .replace(/\s*$/, '');
}

module.exports = {
  description: 'Add a page component',
  prompts: [
    {
      type: 'list',
      name: 'type',
      message: 'Select the base component type:',
      default: 'PureComponent',
      choices: () => ['PureComponent', 'Component'],
    },
    {
      type: 'input',
      name: 'name',
      message: 'What should it be called?',
      default: 'About',
      validate: (value) => {
        if (/.+/.test(value)) {
          return componentExists(value)
            ? 'A page with this name already exists'
            : true;
        }

        return 'The name is required';
      },
    },
    {
      type: 'input',
      name: 'path',
      message: 'Enter the route for the page.',
      default: '/about',
      validate: (value) => {
        if (/.+/.test(value)) {
          return true;
        }

        return 'path is required';
      },
    },
  ],
  actions: () => {
    const componentTemplate = './page/index.hbs';

    const actions = [
      {
        type: 'add',
        path: path.join(paths.appPages, '{{properCase name}}/index.tsx'),
        templateFile: componentTemplate,
        abortOnFail: true,
      },
      {
        type: 'add',
        path: path.join(
          paths.appPages,
          '{{properCase name}}/{{properCase name}}.spec.tsx'
        ),
        templateFile: './page/spec.hbs',
        abortOnFail: true,
      },
      {
        type: 'add',
        path: path.join(paths.appPages, '{{properCase name}}/Loadable.ts'),
        templateFile: './component/loadable.hbs',
        abortOnFail: true,
      },
      {
        type: 'add',
        path: path.join(paths.appPages, '{{properCase name}}/styles.ts'),
        templateFile: './page/styles.hbs',
        abortOnFail: true,
      },
      {
        type: 'modify',
        path: path.join(paths.appSrc, 'routes.ts'),
        pattern: /(\s{\n\s{0,}path: '\*',)/g,
        template: trimTemplateFile('../route/route.hbs'),
      },
    ];

    return actions;
  },
};
