//* FUNCION CONSTRUCTORA
function Persona(nombre, edad) {
  this._nombre = nombre;
  this.edad = edad;

  this.saludar = function() {
    return `Hola, soy ${this._nombre}`
  }
}

const homero = new Persona("Homero", 40);
console.log(homero.edad);
console.log(homero._nombre);
console.log(homero.saludar());

//* UTILIZANDO CLASES
class Usuario {
  #nombre;
  constructor(nombre, edad) {
    this.#nombre = nombre;
    this.edad = edad;
  }
  saludar() {
    return `Hola, soy ${this.#nombre}`
  }
}

const lisa = new Usuario("Lisa", 8);
console.log(lisa.edad);
console.log(lisa.nombre);
console.log(lisa.saludar())

let counter = 0;
function sumar(num) {
  return num + counter;
}