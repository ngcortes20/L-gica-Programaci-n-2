const prompt = require('prompt-sync')();

function convertirTemperaturas() {
    let celsius = parseFloat(prompt("Ingresa una temperatura en grados Celsius (C°): "));

    // Validar que la entrada sea un número
    if (isNaN(celsius) || celsius === null || celsius === "") { //isNana = Verifica si la entrada del usuario (almacenada en celsius) no es un número.
        console.log("Por favor, ingresa un número válido.");
    } else {
        
        // Convertir la entrada a un número
        celsius = parseFloat(celsius);
        const kelvin = celsius + 273.15;
        const fahrenheit = (celsius * 9 / 5) + 32;

    console.log("La conversion en grados Kelvin es: " + kelvin);
    console.log("Y en grados Fahrenheir es: " + fahrenheit);
    }
}

convertirTemperaturas();