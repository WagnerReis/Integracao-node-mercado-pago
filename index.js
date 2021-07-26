const express = require("express");
const MercadoPago = require("mercadopago");
const app = express();

MercadoPago.configure({
  sandbox: true,
  access_token: "TEST-8863696282229739-072616-b253db4db940cabf744a046da6306683-165586353" 
});

app.get("/",(req,res) => {
  res.send("Olá");
});

app.listen(3000, (req, res) => {
  console.log("Servidor rodando!");
})