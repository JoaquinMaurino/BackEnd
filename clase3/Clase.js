const fs = require("fs").promises;

class Container {
  constructor(path) {
    this.path = path;
  }

  //Metodos:
  async save(object) {
    try {
      const read = await fs.readFile(this.path, "utf-8");
      const data = JSON.parse(read);
      let id;
      data.length === 0 ? (id = 1) : (id = data[data.length - 1].id + 1);
      const newProduct = { ...object, id };
      data.push(newProduct);
      await fs.writeFile(this.path, JSON.stringify(data, null, 2), "utf-8");
      return newProduct.id;
    } catch (error) {
      console.log(error);
    }
  }

  async getById(id) {
    try {
      const read = await fs.readFile(this.path, "utf-8");
      const data = JSON.parse(read);
      const objeto = data.find((objeto) => objeto.id === id);
      if (!objeto) {
        return null;
      }
      return objeto;
    } catch (error) {
      console.log(error);
    }
  }

  async getAll() {
    try {
      const read = await fs.readFile(this.path, "utf-8");
      return JSON.parse(read);
    } catch (error) {
      console.log(error);
    }
  }
  
  async deleteById(id) {
    try {
      const read = await fs.readFile(this.path, "utf-8");
      const data = JSON.parse(read);
      const productoEliminado = data.find(producto=> id === producto.id)
      const newData = data.filter(producto => producto.id != id);
      await fs.writeFile(this.path, JSON.stringify(newData, null, 2), "utf-8");
      return productoEliminado
  }catch(error){
console.log(error);
  }
}

  async deleteAll() {
    try {
      await fs.writeFile(this.path, JSON.stringify([], null, 2), "utf-8");
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = Container;
