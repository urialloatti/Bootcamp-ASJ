// Ejercicio 1
function firstExercise() {
    let uno = 7;
    let dos = uno;
    uno = 5;
    return dos;
}


// Ejercicio 2

function secondExercise() {
    alert("Bienbenido!");
    let name = prompt("Ingrese su nombre: ");
    let message = "Hola" + name;
    console.log(message);
    let age = prompt("Ingrese su edad: ");
    let fullMessage = "Nombre: " + name + ", Edad: " + age;
    return fullMessage;
}

// Ejercicio 3

function thirdExercise() {
    let nombre = "Uriel";
    let edad = 26;
    let cumpleanios = "15/01";
    let ciudad = "Córdoba";
    let ocupacion = "Desarrollador";
    let pasatiempos = "Pintar";

    return nombre + " de " + edad + " años, nacido el " + cumpleanios + ". Vive en " + ciudad + ", trabaja como " + ocupacion + ".";
}

// Ejercicio 4

function fourthExercise() {
    let cad = prompt("Ingrese un texto breve: ");
    return cad.length;
}

// Ejercicio 5

function fifthExercise() {
    let age = parseInt(prompt("Ingrese su edad: "));
    return age * 365;
}

// Ejercicio 6

function sixthExercise() {
    let num1;
    let num2;

    num1 = parseInt(prompt("Ingrese un número: "));
    num2 = parseInt(prompt("Ingrese otro número: "));
    let resultado = num1 + num2;

    return resultado;
}

// Ejercicio 7

function snacksCalculator (age, maxAge, snackName, snacksDay) {
    let snacksCalculated = (maxAge - age) * snacksDay
    let message = "Necesitarás " + snacksCalculated + " " + snackName + " para que te alcancen hasta los " + maxAge + " años.";
    let price = 20;
    message = message + " Vas a gastar $" + (price * snacksCalculated) + ".";
    alert(message);
}

let age = 26;
let maxAge = 80;
let snackName = "Maní Japonés";
let snacksDay = 13;
//snacksCalculator(age, maxAge, snackName, snacksDay);

function budgetCalculator(days, maxBudget) {

    let luches;
    luches = days * 3
    let eatingBudget = maxBudget / luches
    let message = "Podés gastar $" + eatingBudget + "en cada comida para que te alcance la plata durante los " + days + " días de viaje.";
    alert(message);
}

let days = 13;
let maxBudget = 500;
//budgetCalculator(days, maxBudget);

// Ejercicio 8
function templateLiterals1 (name, ocupacion) {
    let message = `${name} es ${ocupation}.`;
    return message;
}

let name = "Gabriela";
let ocupation = "programadora";
//alert(templateLiterals1(name, ocupation));

function templateLiterals2() {
    let price = parseInt(prompt("Ingrese el precio del producto: "));
    let quantity = parseInt(prompt("Ingrese la cantidad: "));
    return `Debe abonar $${price * quantity} pesos.`
}

//alert(templateLiterals2);



