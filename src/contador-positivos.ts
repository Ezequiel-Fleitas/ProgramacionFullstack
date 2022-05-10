let numero, contador, contadorPositivos, porcentaje: number;
contador = contadorPositivos = porcentaje = numero = 0;

do {
  numero = Number(prompt(`ingrese un numero \n ingrese cero para finalizar`));
  if (numero !== 0) {
    contador++;
  }
  console.log("Numero:", numero);
  if (numero > 0) {
    contadorPositivos++;
  }
} while (numero !== 0);
porcentaje = (contadorPositivos * 100) / contador;
console.log(contadorPositivos, "positivos", porcentaje, "% del total");
