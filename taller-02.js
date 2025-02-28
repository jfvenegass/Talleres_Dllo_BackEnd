//Punto 1
console.log("Punto 1");
function findMax(arreglo) {
    let mayor = arreglo[0];
    for (let i = 1; i < arreglo.length; i++) {
        if (arreglo[i] > mayor) {
            mayor = arreglo[i];
        }
    }
    return mayor;
}
console.log(findMax([3, 17, -1, 4, -19]));
console.log("--------------------------------------");

//Punto 2
console.log("Punto 2");
function includes(arreglo, numero) {
    for (let i = 0; i < arreglo.length; i++) {
        if (arreglo[i] === numero) {
            return true;
        }
    }
    return false;
}
console.log(includes([3, 17, -1, 4, -19], 2));
console.log(includes([3, 17, -1, 4, -19], 4));
console.log("--------------------------------------");

//Punto 3
console.log("Punto 3");
function sum(arreglo) {
    let sumaTotal = 0;
    for (let i = 0; i < arreglo.length; i++) {
        sumaTotal += arreglo[i];
    }
    return sumaTotal;
}
console.log(sum([3, 17, -1, 4, -19]));
console.log("--------------------------------------");

//Punto 4
console.log("Punto 4");
function missingNumbers(arreglo) {
    let menor = arreglo[0];
    let mayor = arreglo[0];

    for (let i = 1; i < arreglo.length; i++) {
        if (arreglo[i] < menor) {
            menor = arreglo[i];
        }
        if (arreglo[i] > mayor) {
            mayor = arreglo[i];
        }
    }
    let faltantes = [];
    for (let i = menor; i <= mayor; i++) {
        let encontrado = false;
        for (let j = 0; j < arreglo.length; j++) {
            if (arreglo[j] === i) {
                encontrado = true;
                break;
            }
        }
        if (!encontrado) {
            faltantes.push(i);
        }
    }
    return faltantes;
}
console.log(missingNumbers([7, 2, 4, 6, 3, 9]));