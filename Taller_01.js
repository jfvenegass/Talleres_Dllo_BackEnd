//Punto 1
console.log("Punto 1");
function convertidorTemp(Celsius) {
    let F = (Celsius*(9/5))+32;
    return F    
}
console.log(convertidorTemp(0));
console.log(convertidorTemp(67));
console.log(convertidorTemp(-45));

console.log("--------------------------------------");

//Punto 2
console.log("Punto 2");
function resolvedor(a, b, c, Positivo = true) {
    let Discriminante = b * b - 4 * a * c;
    
    if (Discriminante < 0) {
        return "Es como tu vida con ella, algo imaginario";
    }

    let Raiz = Math.sqrt(Discriminante);

    if (Positivo === true) {
        return (-b + Raiz) / (2 * a);
    } else {
        return (-b - Raiz) / (2 * a);
    }
}
console.log(resolvedor(1, 3, 5, true));
console.log(resolvedor(1, 3, 2, false));

console.log("--------------------------------------");

//Punto 3
console.log("Punto 3");
function mejorParidad(Numero) {
    if (Numero % 2 !== 0) {
        return "Número impar";
    } else {
        return "Número par";
    }
}
console.log(mejorParidad(1));
console.log(mejorParidad(2));
console.log(mejorParidad(5));
console.log(mejorParidad(8));
console.log(mejorParidad(9));

console.log("--------------------------------------");

//Punto 4
console.log("Punto 4");
function peorParidad(Numero) {
    let R, e, s, u, l, t, a , d, o, x, y, z;
    if (Numero === 1 || Numero === 3 || Numero === 5 || Numero === 7 || Numero === 9) {
        R = "N";
        e = "ú";
        s = "m";
        u = "e";
        l = "r";
        t = "o";
        a = " ";        
        d = "i";        
        o = "m";  
        x = "p";
        y = "a";
        z = "r";
    } else if (Numero === 2 || Numero === 4 || Numero === 6 || Numero === 8 || Numero === 10) {
        R = "N";
        e = "ú";
        s = "m";
        u = "e";
        l = "r";
        t = "o";
        a = " ";
        d = "";
        o = "";
        x = "p";
        y = "a";
        z = "r";
    } else {
        R = "N";
        e = "ú";
        s = "m";
        u = "e";
        l = "r";
        t = "o";
        a = " ";
        d = "Fuera";
        o = " ";
        x = "de";
        y = " ";
        z = "rango";
    }

    return R + e + s + u + l + t + a + d + o + x + y + z
}
console.log(peorParidad(1));
console.log(peorParidad(2));
console.log(peorParidad(5));
console.log(peorParidad(8));
console.log(peorParidad(9));
console.log(peorParidad(11));
