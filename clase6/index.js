const express = require("express");
const classConatiner = require("../clase3/Clase");

const app = express();

const PORT = 8090

const archivo = new classConatiner("productos.json")

app.get("/products", async (req, res)=>{

    const productos = await archivo.getAll()
    console.log(productos);

    res.send({Productos: productos})
})

app.get("/random", async (req, res)=>{

    const productos = await archivo.getAll()

    const random = parseInt(Math.random()*productos.length)

    res.send({Porductos: productos[random]})
})

const server = app.listen(PORT, ()=>{
    console.log(`Servidor en el puerto ${PORT}`);
});

