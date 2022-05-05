let sueldo, caso, aumento: number; //se declaran las variables a utilizar

console.clear(); //limpia la consola de las escrituras anteriores

do {
  //bucle de validacion de entrada de datos

  sueldo = Number(prompt("Ingrese el sueldo")); //se ingresa el valor del sueldo

  if (sueldo < 0) window.alert("Debe ingresar un numero mayor a cero"); //en caso de que ingrese un numero negativo le mostrara una alerta
} while (sueldo < 0); //en caso de que ingrese un numero negativo le volvera a pedir que ingrese el sueldo

if (sueldo > 0 && sueldo <= 15000) {
  // comprueba un rango de sueldo
  caso = 20; //el caso toma el valor del porcentaje a aplicar
} else if (sueldo > 15000 && sueldo <= 20000) {
  // comprueba un rango de sueldo
  caso = 10; // comprueba un rango de sueldo
} else if (sueldo > 20000 && sueldo <= 25000) {
  // comprueba un rango de sueldo
  caso = 5; // comprueba un rango de sueldo
} else {
  // para cualquier numero que sea mayor de 25000 no se le aplicara aumento
  caso = 0;
}
switch (
  caso //se ingresa el caso y comprueba que porcentaje de aumento le corresponde
) {
  case 5: // aplica el aumento del 5%
    console.log("El aumento (5%) es de: ", sueldo * 0.05);
    console.log("El sueldo total es de:", sueldo * 1.05);
    break;
  case 10: // aplica el aumento del 10%
    console.log("El aumento (10%) es de:", sueldo * 0.1);
    console.log("El sueldo total es de:", sueldo * 1.1);
    break;
  case 20: // aplica el aumento del 20%
    console.log("El aumento (20%) es de :", sueldo * 0.2);
    console.log("El sueldo total es de:", sueldo * 1.2);
    break;
  default:
    // No aplica aumento al resto de resultados
    console.log("Sin aumento de sueldo");
    break;
}
