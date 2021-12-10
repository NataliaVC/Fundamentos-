const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("Mi respuesta desde express v.2");
});

app.get("/servicios", (req, res) => {
    res.send("Estas en la página de servicios002");
});


app.listen(port, () => {
    console.log('servidor a su servicio en el puerto', port);
});