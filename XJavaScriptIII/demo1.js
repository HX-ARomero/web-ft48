//* CLOSURE
//* 1- Es una función que retorna otra función
//* 2- La función anidada utiliza una variable en el scope de la contenedora
//* 3- Es invocada desde un scope externo

function sumaUno(num) {
  let total = num;
  return function () {
    return total++;
  };
}

const contador = sumaUno(5);
console.log(contador);
console.log(contador());
console.log(contador());
console.log(contador());

const contador2 = sumaUno(100);
console.log(contador2());
