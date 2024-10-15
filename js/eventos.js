document.addEventListener('DOMContentLoaded', () => {
    // Ejercicio 1
    document.getElementById('btnFecha').addEventListener('click', () => {
        const fecha = obtenerFechaActual();
        document.getElementById('resultadoFecha').innerText = `Fecha Actual: ${fecha}`;
    });

    // Ejercicio 2
    document.getElementById('btnAreaCirculo').addEventListener('click', () => {
        const radio = parseFloat(document.getElementById('radioCirculo').value);
        if (isNaN(radio) || radio < 0) {
            alert('Por favor, ingrese un radio válido.');
            return;
        }
        const area = calcularAreaCirculo(radio);
        document.getElementById('resultadoArea').innerText = `Área del Círculo: ${area}`;
    });

    // Ejercicio 3
    document.getElementById('btnContarVocales').addEventListener('click', () => {
        const cadena = document.getElementById('cadenaVocales').value;
        if (cadena!==""){
            const total = contarVocales(cadena);
            document.getElementById('resultadoVocales').innerText = `Número de Vocales: ${total}`;
        }else{
            document.getElementById('resultadoVocales').innerText = "Introcuce un texto";
        }
    });

    // Ejercicio 4
    document.getElementById('btnCelsiusFahrenheit').addEventListener('click', () => {
        const celsius = parseFloat(document.getElementById('celsius').value);
        if (isNaN(celsius)) {
            alert('Por favor, ingrese un valor válido para Celsius.');
            return;
        }
        const fahrenheit = celsiusAFahrenheit(celsius);
        document.getElementById('resultadoFahrenheit').innerText = `${celsius}°C = ${fahrenheit}°F`;
    });

    // Ejercicio 5
    document.getElementById('btnFormatearNumero').addEventListener('click', () => {
        const numero = parseFloat(document.getElementById('numeroFormatear').value);
        if (isNaN(numero)) {
            alert('Por favor, ingrese un número válido.');
            return;
        }
        const numeroFormateado = formatearNumero(numero);
        document.getElementById('resultadoNumero').innerText = `Número Formateado: ${numeroFormateado}`;
    });

    // Ejercicio 6
    document.getElementById('btnReyesMagos').addEventListener('click', () => {
        const fechaInput = document.getElementById('fechaReyes').value;
        if (!fechaInput) {
            alert('Por favor, seleccione una fecha.');
            return;
        }
        // Convertir formato "yyyy-mm-dd" a "dd/mm/yyyy"
        const partes = fechaInput.split('-');
        const fechaFormateada = `${partes[2]}/${partes[1]}/${partes[0]}`;
        const dias = reyesMagos(fechaFormateada);
        document.getElementById('resultadoReyes').innerText = `Días para Reyes Magos: ${dias}`;
    });

    // Ejercicio 7
    document.getElementById('btnAleatorio').addEventListener('click', () => {
        const minimo = parseInt(document.getElementById('minimo').value);
        const maximo = parseInt(document.getElementById('maximo').value);

        if (isNaN(minimo) || minimo < 1) {
            alert('Por favor, ingrese un número válido de minimo.');
            return;
        }

        if (isNaN(maximo) || maximo < 1) {
            alert('Por favor, ingrese un número válido de maximo.');
            return;
        }
        const resultado = calcularAleatorio(minimo, maximo);
        document.getElementById('resultadoAleatorio').innerText = `${resultado}`;
    });

    // Ejercicio 8
    document.getElementById('btnNumberToWords').addEventListener('click', () => {
        const cadena = document.getElementById('cadenaNumberToWords').value;
        let numero = "";
        if (cadena !== ""){
            numero = numberToWords(+cadena);
            
        }
        console.log(numero);
        if (numero !== ""){
            document.getElementById('resultadoNumberToWords').innerText = `${numero}`;
        } else{
            document.getElementById('resultadoNumberToWords').innerText = "Introduce un numero entre 0 y 999999";
        }
    });

    // Ejercicio 9
    document.getElementById('btnVerificarPalindromo').addEventListener('click', () => {
        const cadena = document.getElementById('cadenaPalindromo').value;
        const mensaje = "Introduce un texto en el campo"
        if (cadena!==""){
            const esPal = esPalindromo(cadena);
            mensaje = esPal ? 'Es un palíndromo.' : 'No es un palíndromo.';
        }
        document.getElementById('resultadoPalindromo').innerText = mensaje;
    });

    // Ejercicio 10
    document.getElementById('btnCamelCase').addEventListener('click', () => {
        const cadena = document.getElementById('cadenaCamelCase').value;
        const camel = camelCase(cadena);
        document.getElementById('resultadoCamelCase').innerText = `lowerCamelCase: ${camel}`;
    });
});
