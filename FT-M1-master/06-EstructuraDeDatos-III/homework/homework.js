"use strict";

/*
 Implementar la clase BinarySearchTree, definiendo los siguientes métodos recursivos:
  - size: retorna la cantidad total de nodos del árbol
  - insert: agrega un nodo en el lugar correspondiente
  - contains: retorna true o false luego de evaluar si cierto valor existe dentro del árbol
  - depthFirstForEach: recorre el árbol siguiendo el orden depth first (DFS) en cualquiera de sus variantes,
   según se indique por parámetro ("post-order", "pre-order", o "in-order"). 
   Nota: si no se provee ningún parámetro, hará el recorrido "in-order" por defecto.
  - breadthFirstForEach: recorre el árbol siguiendo el orden breadth first (BFS)
  El ábrol utilizado para hacer los tests se encuentra representado en la imagen bst.png dentro del directorio homework.
*/
/*
class BinarySearchTree {
  constructor(value){
    this.value = value;
    this.right = null;
    this.left = null
  }
  size(value){

  }
  insert(value){
    if (value < this.value) {
      if (this.left !== null) {
        this.left.insert(value)
      }else{
        this.left = new BinarySearchTree(value)
      }
    }
    if (value > this.value) {
      if (this.right !== null) {
        this.right.insert(value)
      }else{
        this.right = new BinarySearchTree(value)
      }
    }
  }

  depthFirstForEach(){

  }
  breadthFirstForEach(){

  }
  contains(value){
    if (value === this.value) {
      return true
    }else if (value < this.value) {
      if (this.left === null) {
        return false
      }
      return this.left.contains(value)
    }else if(value > this.value) {
      if (this.right === null) {
      return false
      }
      return this.right.contains(value)
    }
  }
}
*/
function BinarySearchTree(value) {
  this.value = value;
  this.right = null;
  this.left = null;
}

BinarySearchTree.prototype.insert = function (value) {
  
  if (value < this.value) {
    if (this.left === null) {
      this.left = new BinarySearchTree(value)
    }else{
      this.left.insert(value)
    }
  }else if (value > this.value) {
    if (this.right === null) {
        this.right = new BinarySearchTree(value)
    }else{
       this.right.insert(value)
    }
  }

}
 
BinarySearchTree.prototype.size = function () {
  if (!this.left && !this.right) {
    return 1
  }else if(this.left !== null){
    return 1 + this.left.size()
  }else if(this.right !== null){
    return 1 + this.right.size()
  }else{
    return 1 + this.right.size() + this.left.size()
  }
}
BinarySearchTree.prototype.depthFirstForEach = function (f,order) {
  if (order == 'pre-order') {
    f(this.value);
    if (this.left != null) this.left.depthFirstForEach(f, order);
    if (this.right != null) this.right.depthFirstForEach(f, order);
  } else if (order == 'post-order') {
    if (this.left != null) this.left.depthFirstForEach(f, order);
    if (this.right != null) this.right.depthFirstForEach(f, order);
    f(this.value);
  } else {
    if (this.left != null) this.left.depthFirstForEach(f, order);
    f(this.value);
    if (this.right != null) this.right.depthFirstForEach(f, order);
  }
}
BinarySearchTree.prototype.breadthFirstForEach = function (f, array = []) {
  if (this.left !== null) {
   array.push(this.left)
  }
  if (this.right !== null) {
    array.push(this.right)
  }

  f(this.value)
  if (array.length > 0) {
    array.shift().breadthFirstForEach(f,array)
  }
}
BinarySearchTree.prototype.contains = function (value) {
  if (value === this.value) {
    return true
  }else if (value < this.value) {
    if (this.left === null) {
      return false
    }
    return this.left.contains(value)
  }else if(value > this.value) {
    if (this.right === null) {
    return false
    }
    return this.right.contains(value)
  }
}

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree,
};
