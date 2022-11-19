class Container {
  constructor() {
    this.products = [];
  }
//Methods
  getAll(){
    return this.products;
  }

getById(id){
    const obj = this.products.find(product => product.id === id)
    if (obj){
        return obj;
    }else{
        return { error : 'producto no encontrado' }
    }
}

create(obj) {
      const arrayOfIds = this.products.map((product) => product.id);
      const maxID = arrayOfIds.length === 0 ? 0 : Math.max(...arrayOfIds)
      const id = maxID + 1;
      const newObj = {id, ...obj};
      this.products.push(newObj);
      return newObj;
    
  }

updateById(id, obj){

const foundObj = this.products.find(product => product.id === id)
if (foundObj){
const filterProducts = this.products.filter(
product => product.id !== id
);
const newObj = {id, ...obj};
this.products = [...filterProducts, newObj];
return newObj
}else{
  return Error
}
}


deleteById(id){
return true
}
}

module.exports = Container;