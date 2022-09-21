'use strict'
// No cambies los nombres de las funciones.

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:
  // el factorial es dividir la cantidad total y que al multiplicar las cantidades resultantes de la division
  // entre si te dara el resultado final
  let numPrime = [2,3,5,7,11,13,17,19,23,29]
  let arr = [1]
  let acc = num
  for(let i = 0; i < numPrime.length; i++){
      while(acc % numPrime[i] === 0){
        acc =  acc / numPrime[i]
          arr.push(numPrime[i])
      }
  }
  return arr
  
}


function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  for (let i = 0; i < array.length -1; i++) {
    for (let j = 0; j < array.length -1 ; j++) {
      if (array[j] > array[j+1]) {
        let valorMayor = array[j]
          array[j] = array[j +1] 
         array[j + 1] = valorMayor
      }
    }
  }
    return array

}


function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  for (let i = 1; i < array.length; i++) {
    let clave = array[i]
    let j = i-1
    while (array[j] > clave && j >= 0) {
      array[j+1] = array[j]
      j= j-1;
    }
    array[j+1] =clave
  }
  return array
}


function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  for (let i = 0; i < array.length ; i++) {
    let valorMenor = i
    for (let j = i+1; j < array.length ; j++) {
        if (array[valorMenor] > array[j]) {
            valorMenor = j
        }
    }
    let temp = array[i]
    array[i] = array[valorMenor]
    array[valorMenor] = temp
    // 0 1 2
    // 0 1 2 3 4 0 1 2 3 4 
    // array[j] > array[j+1] lo que hace es comparar el valor actual con el siguiente 
    // (si el valor actual es < al siguente: guarda el valor de array[j] valor actual en la variable valorMenor)
    // y dale a la posicion array[j] otorgale a esta posicion el valor de array[i] 
  }
  return array
  // 0 1 2 3 4 0 1 2 3 4 
  // array[j] > array[j+1] lo que hace es comparar el valor actual con el siguiente 
  // (si el valor actual es < al siguente: guarda el valor de array[j] valor actual en la variable valorMenor)
  // y dale a la posicion array[j] otorgale a esta posicion el valor de array[i] 
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
