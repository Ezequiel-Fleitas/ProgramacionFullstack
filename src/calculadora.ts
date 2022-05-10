function sumar(val1: number, val2: number): number {
  let res: number = val1 + val2;
  return res;
}

function restar(val1: number, val2: number): number {
  let res: number = val1 - val2;
  return res;
}

function message() {
  let char: string = "";
  for (let i: number = 0; i < 40; i++) {
    char += "-";
  }
  return char;
}

console.clear();
let numero1: number = Number(prompt("ingrese el primer numero"));
let numero2: number = Number(prompt("ingrese el segundo numero"));
let opcion: number = Number(
  prompt("Ingrese 1 para sumar, 2 para restar u otra tecla para cancelar")
);
let res: number;
switch (opcion) {
  case 1:
    res = sumar(numero1, numero2);
    console.log(message());
    console.log(`El resultado es:`, res);
    console.log(message());
    break;
  case 2:
    res = restar(numero1, numero2);
    console.log(message());
    console.log(` El resultado es:`, res);
    console.log(message());
    break;
  default:
    console.log("Cerrando programa");
}
