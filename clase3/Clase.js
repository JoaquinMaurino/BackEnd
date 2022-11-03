const fs = require("fs").promises;

class Container {
  constructor(path) {
    this.path = path;
    this.products = [];
  }
  //Metodos:
  async save(object) {
    try {
      const read = await fs.readFile(this.path, "utf-8");
      const data = read;
      let id;
      data.length === 0 ? (id = 1) : (id = data[data.length - 1].id + 1);
      const newProduct = { ...object, id };
      data.push(newProduct);
      await fs.writeFile(this.path, data, "utf-8");
      return newProduct.id;
    } catch (error) {
      console.log(error);
    }
  }

  async getById(id) {
    try {
      const read = await fs.readFile(this.path, "utf-8");
      const data = read;
      const objeto = data.find((objeto) =>objeto.id === id);
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
      return read;
    } catch (error) {
      console.log(error);
    }
  }
  deleteById(id) {}

  async deleteAll() {
    try {
      await fs.writeFile(this.path, "utf-8");
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = Container;