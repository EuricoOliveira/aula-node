const moduloImc = require("./moduloImc");
console.log(moduloImc.calcularImc(87.5, 1.88));
console.log(moduloImc.statusImc(21.5));

console.log("-------EXERCÍCIO DOIS------")
const convertTemp = require("./moduloConversor");
console.log(convertTemp.convertC(30));
console.log(convertTemp.convertF(90));

const login = require("./moduloLogin");

console.log(login("danilo@email.com", "153"));

// const calculadora = require("./moduloCalculadora");

// console.log(calculadora.soma(1, 1));
// console.log(calculadora.div(50, 3));
// console.log(calculadora.mult(5, 10));
// console.log(calculadora.mult(calculadora.pi, 2));

// // const resultado = funcaoImc(87.5, 1.88)
// // console.log(resultado)