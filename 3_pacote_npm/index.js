const CPF = require("cpf");
const fs = require("fs");

let numeros = [];
for (let i = 0; i < 1000; i++) {
    numeros.push(CPF.generate());
}
fs.writeFileSync("./cpfs.txt", numeros.join("\n"))

const arquivoCpfs = fs.readFileSync("./cpfs.txt").toString().split("\n");
for (let cpf of arquivoCpfs){
    console.log(cpf)
}
