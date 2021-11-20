// npm -global command, comes with node
// npm --version

// npm-local dependency use it in only particular project
// npm i <package>

// global dependecy - use it in any project
// npm install -g <packageName>
// sudo npm install -g <packageName>


const _ = require('lodash')

const items = [1,[2,[3,[4]]]]
const newItems = _.flattenDeep(items);
console.log(newItems);