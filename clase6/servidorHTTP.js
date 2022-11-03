const http = require("http");

const server = http.createServer((req, res) => {
  res.end(getMensaje());
});

const connectedServer = server.listen(8080, () => {
  //console.log(`Server http escuchando en el puerto 8080`);


});

//ejercicio 1
function getMensaje() {
  const horaActual = new Date().getHours();

  if (horaActual >= 6 && horaActual <= 12) {
    return "Buenos dias";
  } else if (horaActual >= 13 && horaActual <= 19) {
    return "Buenas tardes";
  } else {
    return "Buenas noches";
  }
}
