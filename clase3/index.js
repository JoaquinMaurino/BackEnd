const fs = require("fs");

fs.readFile("package.json", "utf-8", (error, content) => {
  if (error) {
    throw new Error("Error al leer");
  }
  console.log(content);

  const info = {
    contentStr: content,
    contentObj: JSON.parse(content),
    size: content.length
  }

  console.log(info);

  // guardar esta info en un .txt
  fs.writeFile("info.txt", JSON.stringify(info, null, 2), error =>{
    if(error){
        throw new Error("Error en escritura");
    }
    console.log("Escritura ok");
  })
});
