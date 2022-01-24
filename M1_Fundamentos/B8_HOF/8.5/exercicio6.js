const palio = ['Palio', 'Fiat', 2019];
const shelbyCobra = ['Shelby Cobra', 'Ford', 1963];
const chiron = ['Chiron', 'Bugatti', 2016];

const toObject = ([name, manufacturer, year]) => ({
  name,
  manufacturer,
  year,
});

console.log(toObject(palio));