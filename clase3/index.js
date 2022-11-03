const Container = require("./Clase")
const productos = new Container("./data.js")

async function ejecutar(){

  const objeto1 = {
    id: "1",
    name: "Botas Hombre",
    detail: "Indumentaria",
    img: "/ItemIMG/BotasHombre.jpeg",
    price: 5000,
    stock: 8,
    categoria: "Calzado",
  }
  const objeto2 = {
    id: "2",
    name: "Borcegos Integral Work",
    detail:
      "Borcegos de cuero reforzado, con suela febo con cierre lateral. Plantilla termoformada, forrería interior absorbente.",
    img: "/ItemIMG/BotasMujer.jpeg",
    price: 6000,
    stock: 5,
    categoria: "Calzado",
  }
  const objeto3 = {
    id: "3",
    name: "Camisa",
    detail: "Indumentaria",
    img: "/ItemIMG/Camisa.jpeg",
    price: 4500,
    stock: 15,
    categoria: "Indumentaria",
  }
  await productos.getById(3).then(id=>console.log(id))
}

ejecutar()