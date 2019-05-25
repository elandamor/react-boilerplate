const moment = require('moment');

const es5 = () => {
  let years = [];

  for (let i = moment().year() - 5; i <= moment().year(); i++) {
    years.push({ label: i, value: i });
  }

  return years;
}

const es6 = () => {
  // let years = [];

  // for (let i = moment().year() - 5; i <= moment().year(); i++) {
  //   years.push({ label: i, value: i });
  // }

  return moment().year() - 5;
}

console.log(es5());
console.log('-'.repeat(20));
console.log(es6());
