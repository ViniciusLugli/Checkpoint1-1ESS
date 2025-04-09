function compararNumeros(a, b) {
  if (a > b) {
    return "A é maior";
  } else if (b > a) {
    return "B é maior";
  } else {
    return "Ambos são iguais";
  }
}
//ok
console.log(compararNumeros(5, 10)); // esperado: "B é maior" //ok
console.log(compararNumeros(10, 5)); // esperado: "A é maior" //ok
console.log(compararNumeros(7, 7)); // esperado: "Ambos são iguais" //ok
