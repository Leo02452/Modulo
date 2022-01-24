const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

const flatten = (array) => array.reduce((acc, cur) => acc + ', ' + cur, []);

console.log(flatten(arrays));