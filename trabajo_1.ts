//Ingrese número
//Si es cero informar
//Dividir el numero por 2
//Si el MOD es cero es par, si mod es 1 es impar
//Imprimir

import * as readlineSync from "readline-sync";

let numeroIngresado = readlineSync.questionInt("Ingrese un número:");
const divisor = (2);
let modDivision = (numeroIngresado % divisor);
if(numeroIngresado==0){  
    console.log("El numero ingresado es 0 (cero)")
} 
else {  
    if (modDivision==0) {
     console.log("El numero es par.");
    } else {
     console.log("El numero es impar.")}
};