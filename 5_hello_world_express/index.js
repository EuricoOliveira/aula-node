const express = require('express');
// Define uma aplicação backend em Express
// Recursos pré-configurados
const app = express();
const CPF = require('cpf');


// Define um roteamento
// Manipulador de rota
app.get("/", (requisicao, resposta) => {
    resposta.send("<h1>Hello, World!</h1>");
});

// req = requisição do cliente
// res = resposta do servidor
app.get("/teste", (req, res) => {
    // req = objeto com dados do cliente/solicitante
    // res = objeto com dados para resposta do servidor
    res.send("<p>O que deseja campeão?</p>")
});

app.get("/inicio", (req, res) => {
    res.sendFile(__dirname + '/inicio.html')
});

app.get("/ajuda", (req, res) => {
    res.sendFile(__dirname + "/ajuda.html")
});

// Parâmetro de caminho/rota
app.get('/funcionarios/:cpf', (req, res) => {
    const { cpf } = req.params
  
    if (CPF.isValid(cpf)) {
      res.status(200).send('CPF válido');
    } else {
      res.status(400).send('CPF inválido');
    }
  });
  

app.get("/pessoas/:nome/:empresa", (req, res) => {
    const { nome, empresa } = req.params;
    res.send(`${nome}, ${empresa}`)
});

app.get('/imc/:peso/:altura', (req, res) => {
  const peso = parseFloat(req.params.peso);
  const altura = parseFloat(req.params.altura);

  const imc = peso / (altura * altura);

  res.send(`Seu IMC é: ${imc.toFixed(2)}`);
});

app.get("/cpfs/:numero", (req, res) => {
    const numero = Number(req.params.numero);
  
    for (let i = 0; i < numero; i++) {
      res.write(`<p>${CPF.generate()}</p>`);
    }
    res.end();
  });

  // Query // consulta
app.get("/youtube", (req, res) => {
    // const canal = req.query.canal;
    const { canal, video, r } = req.query;
    res.send(`Canal: ${canal}. Vídeo: ${video}. Res: ${r}`);
  });

  app.get("/nome", (req, res) => {
    const { nome } = req.query;

    if(nome) { // truthy values
        res.send(`Olá, ${nome}!`)
    }   else {
        res.status(400).send("Envie o nome corretamente")
    }
  });

  app.get("/soma", (req, res) => {
    const { num1, num2 } = req.query;

    // Checa se os valores foram fornecidos
    if((num1 !== undefined) && (num2 !== undefined)) {
        const soma = Number(num1) + Number(num2);
        res.send(`A soma é: ${soma}`);
    } else {
        res.status(400).send("Forneça dois números válidos");
    }
  });

  app.get("/boasvindas", (req, res) => {
    const { lang } = req.query;

    if(lang === "pt-br") {
        res.send("Bem-vindo!")
    } else if(lang === "en") {
        res.send("Welcome")
    } else {
        res.status(400).send("Idioma não suportado")
    }
  });

  const usuarios = require("./usuarios")

  app.get("/usuarios", (req, res) => {
    res.json(usuarios);
  })

  app.get("/usuarios/:index", (req, res) => {
    const index = Number(req.params.index)
    const usuarioEncontrado = usuarios[index]

    // Tratar a ausência do usuário
    if(usuarioEncontrado) {
        res.json(usuarioEncontrado)
    } else {
        // Not Found = 404
        res.status(404).json({message: "Usuário não encontrado"})
    }    
  })

// Inicializa a escuta de requisições do servidor
app.listen(3000, () => {
    console.log("Servidor rodando em http://localhost:3000/");
});

// GET = leitura de dados
// POST = escrita de dados
// PUT = atualização de dados
// DELETE = remoção de da