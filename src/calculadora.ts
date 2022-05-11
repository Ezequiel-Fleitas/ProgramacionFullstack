//funcion de sumar
function sumar(val1: number, val2: number): number {
  let res: number = val1 + val2;
  return res;
}

//funcion de restar
function restar(val1: number, val2: number): number {
  let res: number = val1 - val2;
  return res;
}

//funcion de dividir
function dividir(val1: number, val2: number): number {
  let res: number = val1 / val2;
  return res;
}

//funcion de multiplicar
function multiplicar(val1: number, val2: number): number {
  let res: number = val1 * val2;
  return res;
}

//funcion de impirmir mensaje
function message() {
  let char: string = "";
  for (let i: number = 0; i < 40; i++) {
    char += "-";
  }
  console.log(char);
}

//limpieza de consola
console.clear();

// las dos variables que seran enviadas como parametros a las funciones
let number1: number = Number(prompt("ingrese el primer numero"));
let number2: number = Number(prompt("ingrese el segundo numero"));

//variable que entrara al switch para elegir la funcion que se desea llamar
let opcion: number = Number(
  prompt("Ingrese 1 para sumar, 2 para restar u otra tecla para cancelar")
);

//variable para almacenar el retorno de las funciones aritmeticas
let res: number;

switch (opcion) {
  case 1:
    res = sumar(number1, number2);
    message();
    console.log(`El resultado es:`, res);
    message();
    break;

  case 2:
    res = restar(number1, number2);
    message();
    console.log(` El resultado es:`, res);
    message();
    break;

  case 3:
    res = dividir(number1, number2);
    message();
    console.log(` El resultado es:`, res);
    message();
    break;

  case 4:
    res = multiplicar(number1, number2);
    message();
    console.log(` El resultado es:`, res);
    message();
    break;

  default:
    console.log("Cerrando programa");
}
