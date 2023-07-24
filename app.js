const _ = require('lodash');
var itmes = [1,[2,[3,[4,[5]]]]];
var newItems = _.flattenDeep(itmes);
console.log(newItems);