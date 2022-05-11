function potencia(val1: number, val2: number): number {
  let res: number = val1;

  if (val2 > 0) {
    for (let i: number = 1; i < val2; i++) {
      res = res * val1;
    }
  } else {
    res = 1;
  }
  return res;
}

console.clear();
let base: number = Number(prompt("Ingrese la base"));
let exponente: number;
do {
  exponente = Number(prompt("Ingrese el exponente"));
  if (exponente < 0) {
    window.alert(
      "Debe ingresar un exponente positivo\nPor favor vuelva a ingresar el exponente"
    );
  }
} while (exponente < 0);

let pot: number;

pot = potencia(base, exponente);
console.log("La potencia de ", base, "con exponente", exponente, " es:", pot);
