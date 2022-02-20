// Kelvin project is a simple javascript project that converts Kelvin to Celsius and fareinheit.
// set variable name to Kelvin as a constant
const kelvin = 293;
// set variable name to Celsius to convert Kelvin to Celsius
let celsius = kelvin - 273;
// set variable name to newton to convert Celcius to Newton
let newton = celsius * (33 / 100);
// round down the newton value useing Math.floor
newton = Math.floor(newton);
// set variable name to fareinheit to convert Celcius to fareinheit
let fareinheit = celsius * (9 / 5) + 32;
//round down the value of fareinheit to the nearest whole number
let temperature = Math.floor(fareinheit);
// print the value of fareinheit to the console
console.log(`The temperature is ${temperature} degrees Fahrenheit.`);
// print the value of celsius to the console
console.log(`The temperature is ${celsius} degrees Celsius.`);
// print the value of newton to the console
console.log(`The temperature is ${newton} degrees Newton.`);
