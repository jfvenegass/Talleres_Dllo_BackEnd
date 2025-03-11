//Punto 1
console.log("Punto 1");
function desglosarString(cadena, tipo) {
    const vocales = "aeiou";
    cadena = cadena.toLowerCase();
    let contador = 0;
    for (let letra of cadena) {
        if (tipo === "vocales" && vocales.includes(letra)) {
            contador++;
        } else if (tipo === "consonantes" && !vocales.includes(letra)) {
            contador++;
        }
    }
    return contador;
}
console.log(desglosarString("murcielagos", "vocales"));
console.log(desglosarString("murcielagos", "consonantes"));
console.log("---------------------------------------------");

//Punto 2
console.log("Punto 2");
function twoSum(numeros, objetivo) {
    const indices = {};
    for (let i = 0; i < numeros.length; i++) {
        const complemento = objetivo - numeros[i];
        if (complemento in indices) {
            return [indices[complemento], i];
        }
        indices[numeros[i]] = i;
    }
    return [];
}
console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 4, 2], 6));
console.log("---------------------------------------------");

//Punto 3
console.log("Punto 3");
function conversionRomana(cifrasRomanas) {
    const romanos = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
    let resultado = 0;
    for (let i = 0; i <cifrasRomanas.length; i++) {
        const actual = romanos[cifrasRomanas[i]];
        const siguiente = romanos[cifrasRomanas[i + 1]];
        if (siguiente && actual < siguiente) {
            resultado += siguiente - actual;
            i++;
        } else {
            resultado += actual;
        }
    }
    return resultado;
}
console.log(conversionRomana("III"));    
console.log(conversionRomana("XIV"));    
console.log(conversionRomana("MMXXIV"));  
console.log(conversionRomana("MXMVII"));