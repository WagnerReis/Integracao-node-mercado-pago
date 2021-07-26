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

app.get("/pagar",async (req, res) => {

  var id = "" + Date.now();
  var emailDoPagador = "teste@gmail.com";

  var dados = {
    items: [
      item = {
        id: id,
        title: "2x video games, 3x camisas",
        quantity: 1,
        currency_id: 'BRL',
        unit_price: parseFloat(150)
      }
    ],
    payer: {
      email: emailDoPagador
    },
    external_reference: id
  }

  try{
    var pagamento = await MercadoPago.preferences.create(dados);
    console.log(pagamento);
    return res.redirect(pagamento.body.init_point);
  }catch(err){
    return res.send(err.message);
  }
});

app.listen(3000, (req, res) => {
  console.log("Servidor rodando!");
})