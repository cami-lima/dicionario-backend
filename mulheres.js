const express = require("express");
const router = express.Router();

const app = express();
const porta = 3333;

const mulheres = [
  {
    nome: "Camila Lima",
    imagem: "https://github.com/cami-lima.png",
    minibio: "Desenvolvedora de software Junior",
  },

  {
    nome: "Iana Chan",
    imagem: "https://bit.ly/3jCXBqP",
    minibio: "Fundadora Programaria",
  },

  {
    nome: "Nina da Hora",
    imagem: "https://bit.ly/3FKpFaz",
    minibio: "Hacker antirracista",
  },
];

function mostraMulheres(request, response) {
  response.json(mulheres);
}

function mostraPorta() {
  console.log("Servidor criado e rodando na porta", porta);
}

app.use(router.get("/mulheres", mostraMulheres));
app.listen(porta, mostraPorta);
