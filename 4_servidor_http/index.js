const http = require('http');
const os = require('os');
const host = "localhost";
const porta = 3000;

const cpf = require("cpf");



const servidor = http.createServer((requisicao, resposta) => {
    console.log("Requisição ocorreu!")
    // O que eu quero responder para quem fez a solicitação
    resposta.write("<h1>Dados do Computador</h1>");
    resposta.write("<hr/>")
    resposta.write(`<p>Arquitetura: ${os.arch()} | Plataforma: ${os.platform()} | ${os.hostname()} | ${os.version()}</p>`);
    resposta.write(`<p>Total de cpus: ${os.cpus().length}</p>`);
    resposta.write(`<p>CPF: ${cpf.generate()}</p>`);
    // Encerra a comunicação
    resposta.end();
});

// Servidor fica esperando requisições
servidor.listen(porta, host);