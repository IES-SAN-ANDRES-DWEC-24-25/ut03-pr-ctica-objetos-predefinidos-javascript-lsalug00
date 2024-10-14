// Devuelve la fecha actual en formato dd/mm/yyyy
function obtenerFechaActual(){
    var fecha = new Date().toLocaleDateString();
    return fecha;
}

// Calcula el área de un círculo a partir de su radio con dos decimales
function calcularAreaCirculo(radio) {
     if (typeof radio !== "number" || radio < 0) {
        return null;
    }
    let area = Math.PI * Math.pow(radio, 2);
    return parseFloat(area.toFixed(2));
}

// Cuenta el número de vocales en una cadena de texto
function contarVocales(cadena) {
    let cont = 0;
    if (typeof cadena !== 'string') {
        cont = -1;
    } else {
        const vocales = "aeiouAEIOUáéíóúÁÉÍÓÚ";
        let tam = cadena.length;
        for (let i = 0; i < tam; i++) {
            if (vocales.includes(cadena[i])) {
                cont++;
            }
        }
    }
    return cont;
}
  
  
// Convierte una temperatura de grados Celsius a Fahrenheit
celsiusAFahrenheit = (celsius) => {

}

// Crea una función que formatee un número agregando comas como separadores de miles.
function formatearNumero(numero) {

}


// Función que recibe un string en formato dd/mm/yyyy y devuelve el número de días que faltan para el 6 de Enero del año siguiente
function reyesMagos(fecha) {

}


// Ejercicio 10: Convertir a lowerCamelCase
function camelCase(cadena) {

}


// Crear una función que devuelva el número de días que quedan para la próxima Navidad
function diasParaNavidad(){

}


// Función que genera un número aleatorio entre comienzo y fin
function calcularAleatorio(comienzo, fin){

}



//   función para verificar si una cadena es un palíndromo sin utilizar expresiones regulares ni programación funcional
function esPalindromo(cadena){

}

// Función que recibe un número y devuelve un string con el número escrito en palabras
function numberToWords(num) {

}
