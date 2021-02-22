// Declaración de Variables

var n1 = n2 = n3 = n4 = 0;
var par = imp = pri = nopri = pos = neg = neu = mult = 0;
var contpar = contImpar = contnopri = contpri = contpos = contneg = contneu = contmult = 0
var n = []

// Funciones para comprobar números


function esPrimo(num) { // Comprobar si el número es primo
    var primo = true;
    i = 2;
    while(primo && i<=Math.sqrt(num)){
        if(num%i==0){
            primo = false;
            break;
        }
        i++;
    }
    return primo; //Retorna True o False
}

function esPar(num) { // Comprobar si el número es par
    numpar = true;
    if (num % 2 == 0) {
        numpar = true;
    } else {
        numpar = false;
    }
    return numpar; //Retorna True o False
}

function esPositivo(num) { // Comprobar si el número es positivo
    numPos = true;
    if (num > 0) {
        numPos = true;
    } else {
        numPos = false;
    }
    return numPos; //Retorna True o False
}

function esCero(num) { // Comprobar si el número es cero
    numCero = true;
    if (num == 0) {
        numCero = true;
    } else {
        numCero = false;
    }
    return numCero; //Retorna True o False
}

function esMultiplo(n) { // Comprobar si el número es múltiplo de 2
    resto = n % 2;
    if(resto==0)
        return true;
    else
        return false; //Retorna True o False
}

// Funciones para comprobar cada número del vector

function vecPrimo(n) { // Contar cada número primo del vector
    var i;
    for (i = 0; i < n.length; i++){
        if( esPrimo(n[i]) == true ) {
            contpri += 1;
        }

    }
    return contpri; // Retorna la cantidad de números
}

function vecNoPrimo(n) { // Contar cada número no primo del vector
    var i;
    for (i = 0; i < n.length; i++){
        if( esPrimo(n[i]) == false ) {
            contnopri += 1;
        }

    }
    return contnopri; // Retorna la cantidad de números
}

function vecPar(n) { // Contar cada número par del vector
    var i
    for (i = 0; i < n.length; i++){
        if( esPar(n[i]) == true ) {
            contpar += 1;
        }

    }
    return contpar; // Retorna la cantidad de números
}

function vecImpar(n) { // Contar cada número impar del vector
    var i
    for (i = 0; i < n.length; i++){
        if( esPar(n[i]) == false ) {
            contImpar += 1;
        }

    }
    return contImpar; // Retorna la cantidad de números
}

function vecPositivo(n) { // Contar cada número positivo del vector
    var i;
    for (i = 0; i < n.length; i++){
        if( esPositivo(n[i]) == true ) {
            contpos += 1;
        }

    }
    return contpos; // Retorna la cantidad de números
}

function vecNegativo(n) { // Contar cada número negativo del vector
    var i;
    for (i = 0; i < n.length; i++){
        if( esPositivo(n[i]) == false ) {
            contneg += 1;
        }

    }
    return contneg; // Retorna la cantidad de números
}



function vecNeutro(n) { // Contar cada número neutro del vector
    var i;
    for (i = 0; i < n.length; i++){
        if( esCero(n[i]) == true ) {
            contneu += 1;
        }
    }
    return contneu; // Retorna la cantidad de números
}

function vecMultiplo(n) { // Contar cada número múltiplo de 2 del vector
    var i;
    for (i = 0; i < n.length; i++){
        if( esMultiplo(n[i]) == true ) {
            contmult += 1;
        }
    }
    return contmult; // Retorna la cantidad de números
}

// Función para comprobar si los números son iguales

function iguales(n,m,z,x){
    if (n == m || n == z || n == x) {
        return true
    }

    if (m == n || m == z || m == x) {
        return true
    }

    if (z == n || z == m || z == x) {
        return true
    }

    if (x == n || x == m || x == z) {
        return true
    }
}

// Función que realiza el proceso al presionar el botón

function calcular() {
    // Se obtiene el valor ingresado en cada casilla
    n1 = document.getElementById("num1").value
    n2 = document.getElementById("num2").value
    n3 = document.getElementById("num3").value
    n4 = document.getElementById("num4").value

    // Se comprueba si alguno de los valores es igual a otro
    if (iguales(n1,n2,n3,n4) == true){ // Si es igual, despliega un mensaje de error
        var myWindow = window.open("", "MsgWindow", "width=200, height=450");
        myWindow.document.write('<html><head><title>Resultados</title><link rel="stylesheet" type="text/css" href="styles.css"></head><body><div class="cuadro2">');
        myWindow.document.write("<span> Hay elementos iguales, intenta nuevamente </span>")
        myWindow.document.write('</div></body></html>');
    } else { // Si son distintos, realizar comprobaciones

        n = [n1, n2, n3, n4]; // Se asignan los valores obtenidos dentro de un vector

        // Se crea una nueva ventana para mostrar los resultados, con su titulo y estilos.
        var myWindow = window.open("", "MsgWindow", "width=200, height=450");
        myWindow.document.write('<html><head><title>Resultados</title><link rel="stylesheet" type="text/css" href="styles.css"></head><body><div class="cuadro2">');
    
        // Se hace el llamado de las funciones para hacer el recorrido al vector
        // Luego se escribe el mensaje en la nueva ventana

        par = vecPar(n);
        myWindow.document.write("<span> Existen: " + par + " Numeros pares </span> <br>");
    
        imp = vecImpar(n);
        myWindow.document.write("<span> Existen: " + imp + " Numeros impares </span> <br>");
    
        pri = vecPrimo(n)
        myWindow.document.write("<span> Existen: " + pri + " Numeros primos </span> <br>");
    
        nopri = vecNoPrimo(n)
        myWindow.document.write("<span> Existen: " + nopri + " Numeros no primos </span> <br>");
    
        pos = vecPositivo(n)
        myWindow.document.write("<span> Existen: " + pos + " Numeros positivos </span> <br>");
    
        neg = vecNegativo(n)
        myWindow.document.write("<span> Existen: " + neg + " Numeros negativos </span> <br>");
    
        neu = vecNeutro(n)
        myWindow.document.write("<span> Existen: " + neu + " Numeros neutros </span> <br>");
    
        mult = vecMultiplo(n)
        myWindow.document.write("<span> Existen: " + mult + " Numeros multiplos de 2 </span> <br>");
        
        // Se cierra el documento html de la nueva ventana
        myWindow.document.write('</div></body></html>');
    

    }

}