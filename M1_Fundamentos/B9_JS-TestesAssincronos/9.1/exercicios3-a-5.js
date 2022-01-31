// Requisito 3 - Imprima em 4 segundos

// const getPlanet = () => {
//   const mars = {
//     name: "Mars",
//     distanceFromSun: {
//       value: 227900000,
//       measurementUnit: "kilometers",
//     },
//   };
//   console.log("Returned planet: ", mars);
// };

// setTimeout(() => getPlanet(), 4000) ; // imprime Marte depois de 4 segundos


// Requisito 4 - Robo de Marte
// const messageDelay = () => Math.floor(Math.random() * 5000);

// const getMarsTemperature = () => {
//   const maxTemperature = 58;
//   return Math.floor(Math.random() * maxTemperature);
// };

// // crie a função sendMarsTemperature abaixo
// const sendMarsTemperature = (callback1, callback2) => {
//   const message = `Mars temperature is: ${callback1()} degree Celsius`
//   setTimeout(() => console.log(message), callback2());
// }

// sendMarsTemperature(getMarsTemperature, messageDelay);
// imprime "Mars temperature is: 20 degree Celsius", por exemplo


// Requisito 5 - converte temperatura
const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};

const toFahrenheit = (degreeCelsius) => (degreeCelsius * 9/5) + 32;

const temperatureInFahrenheit = (temperature) =>
  console.log(`It is currently ${toFahrenheit(temperature)}ºF at Mars`);

const greet = (temperature) =>
  console.log(`Hi there! Curiosity here. Right now is ${temperature}ºC at Mars`);

// definição da função sendMarsTemperature...
const sendMarsTemperature = (callback) => {
  const celsiusTemp = getMarsTemperature();
  const fahrenheitTemp = toFahrenheit(celsiusTemp);
  setTimeout(() => {
    if (callback === temperatureInFahrenheit) {
      callback(fahrenheitTemp)
    }
    callback(celsiusTemp)
  }, messageDelay());
}

sendMarsTemperature(temperatureInFahrenheit); // imprime "It is currently 47ºF at Mars", por exemplo
sendMarsTemperature(greet); // imprime "Hi there! Curiosity here. Right now is 53ºC at Mars", por exemplo