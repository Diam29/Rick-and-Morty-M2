"use strict";
function BinarioADecimal(num) {
  var invertir = num.split('').reverse()
  var decimal = 0;
  for (var i = 0; i < invertir.length; i++) {

    decimal += invertir[i] * 2 ** i

  }

  return decimal
}


function DecimalABinario(num) {
  let binario = []
  while (num !== 0) {
    let resto1 = num % 2
    num = Math.floor(num / 2)
    binario.unshift(resto1)
  }
  return binario.join('');
}

module.exports = {
  BinarioADecimal,
  DecimalABinario,
};