Requerimiento 2: Operaciones con dos números

// Solicitar al usuario que ingrese dos números
let num1 = parseFloat(prompt("Ingrese el primer número:"));
let num2 = parseFloat(prompt("Ingrese el segundo número:"));

// Realizar las operaciones
let suma = num1 + num2;
let resta = num1 - num2;
let division = num1 / num2;
let multiplicacion = num1 * num2;
let modulo = num1 % num2;

// Mostrar los resultados
console.log("Suma:", suma);
console.log("Resta:", resta);
console.log("División:", division);
console.log("Multiplicación:", multiplicacion);
console.log("Módulo:", modulo);



Requerimiento 3: Conversión de temperatura

// Solicitar al usuario que ingrese la temperatura en grados Celsius
let celsius = parseFloat(prompt("Ingrese la temperatura en grados Celsius:"));

// Convertir la temperatura a grados Kelvin y Fahrenheit
let kelvin = celsius + 273.15;
let fahrenheit = (celsius * 9/5) + 32;

// Mostrar los resultados
console.log("Temperatura en Kelvin:", kelvin);
console.log("Temperatura en Fahrenheit:", fahrenheit);



Requerimiento 4: Conversión de días a Años, Semanas y Días

// Solicitar al usuario que ingrese la cantidad de días
let dias = parseInt(prompt("Ingrese la cantidad de días:"));

// Calcular la cantidad equivalente en Años, Semanas y Días
let anios = Math.floor(dias / 365);
let semanas = Math.floor((dias % 365) / 7);
let diasRestantes = dias % 365 % 7;

// Mostrar los resultados
console.log("Años:", anios);
console.log("Semanas:", semanas);
console.log("Días:", diasRestantes);



Requerimiento 5: Cálculos con 5 números

// Solicitar al usuario que ingrese 5 números
let num1 = parseFloat(prompt("Ingrese el primer número:"));
let num2 = parseFloat(prompt("Ingrese el segundo número:"));
let num3 = parseFloat(prompt("Ingrese el tercer número:"));
let num4 = parseFloat(prompt("Ingrese el cuarto número:"));
let num5 = parseFloat(prompt("Ingrese el quinto número:"));

// Calcular la suma de todos los números ingresados
let sumaTotal = num1 + num2 + num3 + num4 + num5;

// Calcular el promedio de los 5 números ingresados
let promedio = sumaTotal / 5;

// Mostrar los resultados
console.log("La suma de los números es:", sumaTotal);
console.log("El promedio de los números es:", promedio);
