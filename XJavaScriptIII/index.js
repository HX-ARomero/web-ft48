function Persona(nombre, edad) {
  this.nombre = nombre;
  this.edad = edad;
}

Persona.prototype.saludar = function() {
  return `Hola, soy ${this.nombre}`
}

const homero = new Persona("Homero", 40); //* { nombre: , edad: } 
console.log(homero);
console.log(homero.saludar());

const marge = new Persona("Marge", 40); //* { nombre: , edad: } 
console.log(marge);
console.log(marge.saludar());

//* UTILIZANDO CLASES
class Usuario {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }
}
Usuario.prototype.saludar = function() {
  return `Hola, soy ${this.nombre}`
}
