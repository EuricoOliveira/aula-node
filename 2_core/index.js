// Core Modules = módulos embutidos

// Módulo operational system (os)
const os = require("os");

// console.log(os.arch());// Architecture (32, 64 ou outro)
// console.log(os.platform()); // Windows, linux
// console.log(os.type()); // Windows, linux
// console.log(os.version());  
// console.log(os.uptime());
// console.log(os.freemem()); // bytes
// console.log(os.totalmem()); // bytes
// console.log(os.cpus().length);
// console.log(os.homedir());
// console.log(os.hostname());
// console.log(os.userInfo());

// Módulo fs = filesystem

const os = require("os");
const fs = require("fs");

const arquitetura = os.arch();
const plataforma = os.platform();
const usuario = os.hostname();
const versao = os.version();

fs.writeFileSync(
  "./os-info.txt",
  `${arquitetura}\n${plataforma}\n${usuario}\n${versao}`
);

/** EXERCÍCIO IV: Escreva um arquivo txt com as informações do seu sistema:
 * Explore as funções do módulo os e gere um arquivo txt com informações
 * da máquina.
 */

