const express = require("express");

const app = express();

app.use(express.json());

app.post("/soma", (req, res) => {
    const resultado = req.body.numero1 + req.body.numero2;

    res.send({
        resultado: resultado
    });
});

app.post("/subtracao", (req, res) => {
    const resultado = req.body.numero1 - req.body.numero2;

    res.send({
        resultado: resultado
    });
});

app.post("/multiplicacao", (req, res) => {
    const resultado = req.body.numero1 * req.body.numero2;

    res.send({
        resultado: resultado
    });
});

app.post("/divisao", (req, res) => {
    const resultado = req.body.numero1 / req.body.numero2;

    res.send({
        resultado: resultado
    });
});

app.listen(3001, () => {
    console.log("Servidor conectado na porta 3001!");
});