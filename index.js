let variableSinValor;
let booleano1 = true;
let booleano2 = false;
const PI = 3.14;
const TAU = 3.14 * 2;

let booleanoAnd = booleano1 && booleano2;
let booleanoNot = !booleano1;
let booleanoMix0 = (booleano1 || booleano2) && (booleano1 || (!booleano1 && !booleano2));

let incrementarDesp = 2;
let resultadoDesp = incrementarDesp++;

let incrementarAntes = 2;
let resultadoAntes = ++incrementarAntes;

let contarHasta10_2 = 0;
for (let i = 0; i <= 10; i++){    
        console.log(contarHasta10_2 = i); 
}

let postI = 0;
let postJ = 0;
for (let i = 0; i < 11; i++) {
    postI += postJ++;
  }

let sumaPares = 0;
for (let i= 0; i < 10; i++){
    if(i % 2 === 0){
        console.log(sumaPares += i);
    }
}

let variableValorNumerico = 13;
const MiNombre = 'Rebeca';
const MiNumeroFav = 3;

const booleanoOr = booleano1 || booleano2;
const booleanoMix1 = (booleano1 && TAU / 2 === PI) || (variableValorNumerico >= miNumeroFav);

let seisNoEsNueve = 6 !== 9;

let booleanoMix2 = variableValorNumerico > 0 < (MiNumeroFav * TAU);

let valorSuma = MiNumeroFav + variableValorNumerico;
let valorResta =MiNumeroFav - variableValorNumerico;

let valorMultiplicacion = MiNumeroFav * variableValorNumerico;
let valorDivision = MiNumeroFav / 3;

let contarHasta10 = 0;
 for(let i = 0; i <= 10; i++){
    console.log(contarHasta10 = i);
 }

 let preI = 0;
 let preJ = 0;
 for (let i = 0; i < 11; i++){
    console.log(preI += ++preJ);
 }


 let sumaImpares = 0;
 for (let i = 0; i < 10; i++){
    if (i % 2 !== 0){
        console.log(sumaImpares += i);
    }
 }