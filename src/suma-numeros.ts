let primerNumero: number = Number(prompt("ingrese el primer numero"));
let segundoNumero: number = Number(prompt("ingrese el segundo numero"));
let aux, suma: number;
suma = aux = 0;

if (primerNumero > segundoNumero) {
  aux = primerNumero;
  primerNumero = segundoNumero;
  segundoNumero = aux;
}
for (let i: number = primerNumero; i <= segundoNumero; i++) {
  suma += i;
  console.log("resultado:", suma);
}
