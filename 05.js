/* 
  Importante: 
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la funcion 
*/

function pedazos(array, cantidad) {
  // La funcion pedazos recibe un arreglo llamado 'array' y un numero entero llamado 'cantidad'
  // Esta debe separar el array recibido en N subarreglos que tengan como máximo el numero recibido en cantidad de elementos.
  // Por ejemplo:
  // pedazos([1,2,3,4,5], 2) -> retorna [[1,2], [3,4], [5]);
  // pedazos([1,2,3,4,5], 4) -> retorna [[1,2,3,4], [5]);
  // pedazos{[1,2],4) -> retorna [[1,2]];
  const newArray = [];
  let pedazo = [];

  for (const index in array) {
    pedazo.push(array[index]);

    if (pedazo.length === cantidad || index == array.length - 1) {
      newArray.push(pedazo);
      pedazo = [];
    }
  }

  return newArray;
};
// No modifiques nada debajo de esta linea //

module.exports = pedazos