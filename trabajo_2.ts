//Ingrese número base
//Ingrese numero exponente
//

import * as readlineSync from "readline-sync";

let base: number = readlineSync.questionInt("Ingrese su base:");
let exponente:  number = readlineSync.questionInt("ingrese el exponente ");

function calcular(base: number, exponente: number) {
     if (exponente >= 0) {
          
        if (exponente === 0) {
            return 1;
        } else {
            return calcularPotencia(base,exponente);
        }   
    }
}

function calcularPotencia(base: number, exponente: number) {
     let resultado: number = 1;
     for (let i: number = 0;  i < exponente; i++) {
        resultado*= base;
     }
     return resultado;
}

let potencia : any = calcular(base,exponente);

console.log( base + " a la" + exponente + "potencia =" + potencia);