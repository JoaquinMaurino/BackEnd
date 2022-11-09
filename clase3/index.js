const Container = require("./Clase")
const productos = new Container("./data.json")

async function ejecutar(){

  const objeto1 = {
    name: "Borcegos",
    thumbnail: "url",
    price: 5000
  }
  const objeto2 = {
    name: "Camisa",
    thumbnail: "url",
    price: 7800
  }
  const objeto3 = {
    name: "Musculosa",
    thumbnail: "url",
    price: 4500
  }
  await productos.getById(2).then(id=>console.log(id))
}
ejecutar()