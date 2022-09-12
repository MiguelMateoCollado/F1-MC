'use strict'

function BinarioADecimal(num) {
  var binarios = [...num+''].map(n=>+n).reverse()
  var total = 0
  for (let i = 0; i < binarios.length; i++) {
    total += binarios[i] * (2 ** i)
  }
  return total
}

function DecimalABinario(num) {
  let array = []
do {
  array.push(Math.floor(num % 2))
  num = num / 2 
} while (num >= 1);
return array.reverse().join('')
}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}