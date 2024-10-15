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
    let resultado;
    if (typeof celsius !== 'number' || isNaN(celsius)) {
        resultado = null;
    } else {
        resultado = parseFloat((celsius * (9 / 5) + 32).toFixed(2));
    }

    return resultado;
    }

// Crea una función que formatee un número agregando comas como separadores de miles.
function formatearNumero(numero) {
    let resultado = null;

    if (typeof numero === 'number' && !isNaN(numero) && isFinite(numero)) {
        resultado = numero.toLocaleString('es-ES');
    }

    return resultado;
}


// Función que recibe un string en formato dd/mm/yyyy y devuelve el número de días que faltan para el 6 de Enero del año siguiente
function reyesMagos(fecha) {
    let resultado = null;

    const regexFecha = /^\d{2}\/\d{2}\/\d{4}$/;
    if (regexFecha.test(fecha)) {
        const [dia, mes, año] = fecha.split('/').map(Number);

        const fechaProporcionada = new Date(año, mes - 1, dia);

        if (fechaProporcionada.getDate() === dia && fechaProporcionada.getMonth() === mes - 1) {
            let fechaReyes = new Date(año, 0, 6);

            if (fechaProporcionada > fechaReyes) {
                fechaReyes = new Date(año + 1, 0, 6);
            }

            const milisegundosPorDia = 1000 * 60 * 60 * 24;
            resultado = Math.round((fechaReyes - fechaProporcionada) / milisegundosPorDia);
        }
    }

    return resultado;
}


// Ejercicio 10: Convertir a lowerCamelCase
function camelCase(cadena) {

}


// Crear una función que devuelva el número de días que quedan para la próxima Navidad
function diasParaNavidad(){

}


// Función que genera un número aleatorio entre comienzo y fin
function calcularAleatorio(comienzo, fin){
    let resultado = null;

    if (typeof comienzo === 'number' && typeof fin === 'number' &&
        isFinite(comienzo) && isFinite(fin) &&
        Number.isInteger(comienzo) && Number.isInteger(fin) &&
        comienzo >= 0 && fin >= 0 && comienzo <= fin) {
        
        if (comienzo === fin) {
            resultado = comienzo;
        } else {
            resultado = Math.floor(Math.random() * (fin - comienzo + 1)) + comienzo;
        }
    }

    return resultado;
}



//   función para verificar si una cadena es un palíndromo sin utilizar expresiones regulares ni programación funcional
function esPalindromo(cadena){

}

// Función que recibe un número y devuelve un string con el número escrito en palabras
function numberToWords(num) {
    let resultado = '';

    if (typeof num !== 'number' || !Number.isInteger(num) || num < 0 || num > 999999) {
        resultado = '';
    }else{
        const unidades = ['cero', 'un', 'dos', 'tres', 'cuatro', 'cinco', 'seis', 'siete', 'ocho', 'nueve'];
        const decenasEspeciales = ['diez', 'once', 'doce', 'trece', 'catorce', 'quince', 'dieciséis', 'diecisiete', 'dieciocho', 'diecinueve'];
        const decenas = ['', '', 'veinti', 'treinta', 'cuarenta', 'cincuenta', 'sesenta', 'setenta', 'ochenta', 'noventa'];
        const centenas = ['', 'ciento', 'doscientos', 'trescientos', 'cuatrocientos', 'quinientos', 'seiscientos', 'setecientos', 'ochocientos', 'novecientos'];

        if (num === 0) {
            resultado = 'cero';
        }

        const miles = Math.floor(num / 1000);
        const resto = num % 1000;

        if (miles > 0) {
            if (miles === 1) {
                resultado += 'mil';
            } else {
                const cientosDeMiles = Math.floor(miles / 100);
                const decenasDeMiles = miles % 100;

                if (cientosDeMiles === 1) {
                    if (decenasDeMiles === 0){
                        resultado += "cien" + ' ';
                    }else{
                        resultado += "ciento" + ' ';
                    }
                }else if (cientosDeMiles > 0) {
                    resultado += centenas[cientosDeMiles] + ' ';
                }

                if (decenasDeMiles > 0) {
                    if (decenasDeMiles < 10) {
                        resultado += unidades[decenasDeMiles];
                    } else if (decenasDeMiles === 20){
                        resultado += "veinte";
                    } else if (decenasDeMiles === 21){
                        resultado += "veintiun";
                    } else if (decenasDeMiles < 21) {
                        resultado += decenasEspeciales[decenasDeMiles - 10];
                    } else if (decenasDeMiles < 30) {
                        const decena = Math.floor(decenasDeMiles / 10);
                        const unidad = decenasDeMiles % 10;
        
                        resultado += decenas[decena];
                        if (unidad > 0) {
                            resultado += unidades[unidad];
                        }
                    } else {
                        const decena = Math.floor(decenasDeMiles / 10);
                        const unidad = decenasDeMiles % 10;

                        resultado += decenas[decena];
                        if (unidad > 0) {
                            resultado += ' y ' + unidades[unidad];
                        }
                    }
                }
                resultado += ' mil';
            }
        }

        if (resto > 0) {
            if (resultado !== '') {
                resultado += ' ';
            }

            const cientos = Math.floor(resto / 100);
            const dec = resto % 100;

            if (cientos > 0) {
                if (cientos === 1 && dec === 0) {
                    resultado += 'cien';
                } else {
                    resultado += centenas[cientos];
                }
            }

            if (dec > 0) {
                resultado += (cientos > 0 ? ' ' : '');
                if (dec == 1){
                    resultado += "uno";
                }else if (dec < 10) {
                    resultado += unidades[dec];
                } else if (dec < 20) {
                    resultado += decenasEspeciales[dec - 10];
                } else if (dec === 20){
                    resultado += "veinte";
                }  else if (dec === 21){
                    resultado += "veintiuno";
                } else if (dec < 30) {
                    const decena = Math.floor(dec / 10);
                    const unidad = dec % 10;

                    resultado += decenas[decena];
                    if (unidad > 0) {
                        resultado += unidades[unidad];
                    }
                } else {
                    const decena = Math.floor(dec / 10);
                    const unidad = dec % 10;

                    resultado += decenas[decena];
                    if (unidad == 1) {
                        resultado += ' y ' + "uno";
                    }else if (unidad > 0) {
                        resultado += ' y ' + unidades[unidad];
                    }
                }
            }
        }
    }

    return resultado.trim();
}
