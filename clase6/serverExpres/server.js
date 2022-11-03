const express = require("express");

const app = express();

const PORT = 8090

app.get("/", (req, res) =>{
    res.send(`<h1 style="color:blue"> Hola Mundo</h1>`)
})
let visitas = 0
app.get("/visitas", (req, res)=>{
    visitas += 1
    res.send(`La cantidad de visitas es: ${visitas}`)
})

app.get("/fyh", (req, res)=>{
    let date = new Date();
    res.send(date.toLocaleString())
})

// Configuramos el puerto
const server = app.listen(PORT, ()=>{
    console.log(`servidor express escuchando el puerto ${PORT}`);
})

//escuchamos un evento en caso de error
server.on("error", error => console.log(`error en servidor ${error}`))

