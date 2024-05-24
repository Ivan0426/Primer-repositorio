import * as readlineSync from "readline-sync";
 
let arregloA: number [] = new Array(6)
arregloA = [1,2,3,4,5,6];
let arregloB: number [] = [7,8,9,10,11,12];
let arregloSuma: number [] = new Array (6);

//arregloSuma=[0,0,0,0,0,0];

/*[1, 2, 3, 4, 5, 6];
[7, 8, 9,10,11,12];
[8,10,12,14,16,18]*/

for (let i = 0; i < arregloA.length; i++) {
    arregloA[i]=readlineSync.questionInt ("ingrese el valor del arreglo A en la posicion " + i);
    arregloB[i]=readlineSync.questionInt ("ingrese el valor del arreglo B en la posicion " + i);
    arregloSuma[i]=arregloA[i]+arregloB[i];
}

 

for (let i = 0; i < arregloSuma.length; i++) {
    console.log(arregloSuma[i]);
}