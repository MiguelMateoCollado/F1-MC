"use strict";

/*
Implementar la clase LinkedList, definiendo los siguientes métodos:
  - add: agrega un nuevo nodo al final de la lista;
  - remove: elimina el último nodo de la lista y retorna su valor (tener en cuenta el caso particular de una lista de un solo nodo y de una lista vacía);
  - search: recibe un parámetro y lo busca dentro de la lista, con una particularidad: el parámetro puede ser un valor o un callback. En el primer caso, buscamos un nodo cuyo valor coincida con lo buscado; en el segundo, buscamos un nodo cuyo valor, al ser pasado como parámetro del callback, retorne true. 
  Ejemplo: 
  search(3) busca un nodo cuyo valor sea 3;
  search(isEven), donde isEven es una función que retorna true cuando recibe por parámetro un número par, busca un nodo cuyo valor sea un número par.
  En caso de que la búsqueda no arroje resultados, search debe retornar null.
*/

class LinkedList {
  constructor() {
    this.head = null;
  }
  add(value) {
    let node = new Node(value);
    let current = this.head;
    if (!current) {
      this.head = node;
      return node
    } else {
      while (current.next) {
        current = current.next
      }
      current.next = node;
    }
  }
  remove() {
    var actual = this.head;
    var actualvalue;
    if (this.head === null) {
      return null;
    }else if (actual.next !== null) {
      while (actual.next.next) {
        actual = actual.next;
      }
      actualvalue = actual.next.value;
      actual.next = null;
      
      return actualvalue;
    }else{
      actualvalue = this.head.value;
      this.head = null;
      return actualvalue;
    }
  }
    search(value){
    if (this.head ===null) return null
    let current = this.head
    while (current) {
      if (current.value === value) {
        return current.value 
      }else if (typeof value === "function") {
        if (value(current.value)) {
          return current.value
        }
      }
      current = current.next
    }
    return null
    }
  
}
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

/*
Implementar la clase HashTable.

Nuetra tabla hash, internamente, consta de un arreglo de buckets (slots, contenedores, o casilleros; es decir, posiciones posibles para almacenar la información), donde guardaremos datos en formato clave-valor (por ejemplo, {instructora: 'Ani'}).
Para este ejercicio, la tabla debe tener 35 buckets (numBuckets = 35). (Luego de haber pasado todos los tests, a modo de ejercicio adicional, pueden modificar un poco la clase para que reciba la cantidad de buckets por parámetro al momento de ser instanciada.)

La clase debe tener los siguientes métodos:
  - hash: función hasheadora que determina en qué bucket se almacenará un dato. Recibe un input alfabético, suma el código numérico de cada caracter del input (investigar el método charCodeAt de los strings) y calcula el módulo de ese número total por la cantidad de buckets; de esta manera determina la posición de la tabla en la que se almacenará el dato.
  - set: recibe el conjunto clave valor (como dos parámetros distintos), hashea la clave invocando al método hash, y almacena todo el conjunto en el bucket correcto.
  - get: recibe una clave por parámetro, y busca el valor que le corresponde en el bucket correcto de la tabla.
  - hasKey: recibe una clave por parámetro y consulta si ya hay algo almacenado en la tabla con esa clave (retorna un booleano).

Ejemplo: supongamos que quiero guardar {instructora: 'Ani'} en la tabla. Primero puedo chequear, con hasKey, si ya hay algo en la tabla con el nombre 'instructora'; luego, invocando set('instructora', 'Ani'), se almacenará el par clave-valor en un bucket específico (determinado al hashear la clave)
*/

class HashTable {
  constructor(){
    this.numBuckets = 35
    this.buckets = []
  }
  hash(value){
    let totalChart = 0
    for (let i = 0; i < value.length; i++) {
    let valorChart = value.charCodeAt(i)
    totalChart += valorChart
    }
    return totalChart % this.numBuckets
  }
  set(key,value){
    if (typeof key !== 'string') throw new TypeError('Keys must be string')
    let i = this.hash(key)
    if (this.buckets[i] === undefined) {
      this.buckets[i] = {}
    }
    this.buckets[i][key] = value

  }
  get(key){
    let i = this.hash(key)
    return this.buckets[i][key]
  }
  hasKey(key){
    let i = this.hash(key)
    if (this.buckets[i][key] === undefined) {
      return false
    }else {
      return true
    }
    return this.buckets[i][key]
  }
}


// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  Node,
  LinkedList,
  HashTable,
};
