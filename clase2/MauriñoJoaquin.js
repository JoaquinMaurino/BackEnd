class Usuario{
    constructor(nombre, apellido ){
this.nombre = nombre;
this.apellido = apellido;
this.libros = [];
this.mascotas = []
    }
    getFullName(){
        return this.nombre +" "+ this.apellido
    }
    addMascota(nombre){
this.mascotas.push(nombre);
    }
    countMascotas(){
return this.mascotas.length
    }
    addBook(nombre, autor){
this.libros.push({nombre, autor})
    }
    getBookNames(){
return this.libros.map(libro => libro.nombre)
    }
}

let usuario1 = new Usuario("Joaquin", "Mauriño");

usuario1.addMascota("Coco", "Bruno", "Nina", "Oliver")
usuario1.addBook("El señor de las moscas","William Golding")
usuario1.addBook("Fundacion", "Isaac Asimov");

console.log(usuario1.getFullName());
console.log(usuario1.countMascotas());
console.log(usuario1.getBookNames());
