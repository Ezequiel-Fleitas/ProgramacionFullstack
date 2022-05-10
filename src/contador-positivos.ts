/*
 * Leer valores del usuario hasta que introduzca un 0
 * El usuario puede introducir valores numéricos, tanto positivos como negativos
 * Contar la cantidad de valores introducidos que sean mayores a 0
 * y el porcentaje de positivos respecto del total
 */

let numero, contador, contadorPositivos, porcentaje: number;
contador = contadorPositivos = porcentaje = numero = 0;

do {
  // ingreso de numeros a travez de prompt
  numero = Number(prompt(`ingrese un numero \n ingrese cero para finalizar`));

  //cuenta los numeros ingresados siempre y cuando no sea cero (finaliza el programa)
  if (numero !== 0) {
    contador++;
  }

  // muestra todos los nuemros ingresados para corroborar
  // la cantidad de positivos ingresados
  console.log("Numero:", numero);

  //otro contador para solo los numeros positivos
  if (numero > 0) {
    contadorPositivos++;
  }

  //finaliza el bucle y la entrada de nuemros una vez ingresado cero
} while (numero !== 0);

//  calculo del porcentaje de numeros positivos
porcentaje = (contadorPositivos * 100) / contador;

// impresion final
console.log(contadorPositivos, "positivos", porcentaje, "% del total");
