import _ from 'lodash'

console.log(_.chunk(['a', 'b', 'c', 'd'], 2))

var hello = _.template('hello <%= user %>!')
console.log(hello({ 'user': 'fred' }))

console.log(_.compact([0, 1, false, 2, '', 3]))

console.log(_.difference([2, 1, 'hogehgoe'], [3, 'hogehgoe', 2]))

var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];

console.log(_.differenceWith(objects, [{ 'x': 1, 'y': 2 }], _.isEqual))

console.log(_.drop([1, 2, 3]))

console.log(_.dropRight([1, 2, 3], 2))

var users = [
  { 'user': 'barney', 'active': true },
  { 'user': 'fred', 'active': false },
  { 'user': 'pebbles', 'active': false }
];

console.log(_.dropRightWhile(users, function (o) { return !o.active; }))
console.log(_.dropRightWhile(users, ['active', false]))

_.flatten([1, [2, [3, [4]], 5]]);
// => [1, 2, [3, [4]], 5]

_.flattenDeep([1, [2, [3, [4]], 5]]);
// => [1, 2, 3, 4, 5]

var array = [1, [2, [3, [4]], 5]];

_.flattenDepth(array, 1);
// => [1, 2, [3, [4]], 5]

_.flattenDepth(array, 2);
// => [1, 2, 3, [4], 5]

console.log(_.intersection([2, 1, 3], [2, 3]));
