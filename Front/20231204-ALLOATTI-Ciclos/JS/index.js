function oddOrEven() {
    let num = Number(prompt("Ingrese un número: "));
    switch (num % 2) {
        case 1:
            alert("El número es impar.");
            break;
        case 0:
            alert("El número es par.");
            break;
        default:
            alert("El valor ingresado no es numérico.")
    }
}

function translator() {
    let word = prompt("Ingrese una palabra:");
    switch(word.toLowerCase()) {
        case "casa":
            alert("House.");
            break;
        case "perro":
            alert("Dog.");
            break;
        case "pelota":
            alert("Ball");
            break;
        case "genio":
            alert("Genie");
            break;
        default:
            alert("La palabra ingresada es incorrecta.");
    }
}

function movieReview() {
    let rating = prompt("Ingrese su valoración:");
    let message = `Calificaste la película como ${rating}, `
    switch (rating.toLowerCase()) {
        case "muy buena":
        case "buena":
            alert( message + "nos alegra que la hayas disfrutado!");
            break;
        case "mediocre":
            alert(message + "esperamos que la próxima la disfrutes más :)");
            break;
        case "mala":
        case "muy mala":
            alert(message + "lo lamentamos mucho.");
            break;
        default:
            alert("Ingresaste un valor inválido.")
    }
    alert("Gracias por su visita.")
}


function sumNumbers() {
    let num = Number(prompt("Ingrese un número:"));
    let counter = 0;
    let accumulator = 0;
    if (isNaN(num)) {
        alert("El valor ingresado no es un número.")
    }
    else {
        while (counter <= num) {
            accumulator += counter;
            counter ++;
        }
        alert(`La suma de todos los números hasta el ingresado es ${accumulator}.`);
    }
}

function countPositives() {
    let num = Number(prompt("Ingrese un número:"));
    let counter = 0;
    while (num >= 0) {
        counter ++;
        num = Number(prompt("Ingrese un número:"));
    }
    alert(`Se ingresaron ${counter} números positivos.`)
}

function fizzBuzz() {
    let counter = 1;
    while (counter <= 100) {
        let message = ""
        if (counter % 3 == 0) {
            message += "Fizz";
        }
        if (counter % 5 == 0) {
            message += "Buzz";
        }
        if (message.length == 0) {
            message = counter;
        }

        console.log(message);
        counter ++;
    }
}

// Ejercicio bar:

function bar() {
    alert("Buenos días.")
    // Inicializamos variables
    let firstMessage = "Que desea hacer?\n1: Realizar pedido.\n2: Pedir chiste.\n3: Consultar la cuenta al momento.\n4: Pagar y salir."
    let menuOptions = "1: Café             $750\n2: Té                 $650\n3: Criollitos (2) $500\n4: Medialuna    $800\n0: Volver atrás"
    let messageTip = "Que porcentaje desea dejar de propina?"
    let total = 0
    let finalPrice = 0
    let op = -1
    
    while (op != 4) {
        op = Number(prompt(firstMessage));
        switch (op) {
            case 1:
                let opMenu = Number(prompt(menuOptions));
                switch (opMenu) {
                    case 1:
                        alert("Café pedido.");
                        total += 750;
                        break;
                    case 2:
                        alert("Té pedido.");
                        total += 650;
                        break;
                    case 3:
                        alert("Criollitos pedidos.");
                        total += 500;
                        break;
                    case 4:
                        alert("Medialuna pedida.");
                        total += 800;
                        break;
                    case 0:
                        alert("Volviendo al menú principal...");
                        break;
                    default:
                        alert("Error, la opción ingresada no es válida.");
                        opMenu = Number(prompt(menuOptions));
                }
                break;
            case 2:
                alert("¿Por qué los programadores prefieren el calor?");
                alert("Porque les gusta tener ventanas abiertas! :)");
                break;
            case 3:
                alert(`La cuenta actual es $${total}.`);
                break;
            case 4:
                alert(`La cuenta actual es $${total}.`);
                if (total != 0) {
                    let opTip = Number(prompt(messageTip));
                    while(isNaN(opTip) || opTip < 0) {
                        alert("Error, ingrese un número por favor.");
                        opTip = Number(prompt(messageTip));
                    }
                    finalPrice = (total + total * opTip / 100).toFixed(2);
                    alert(`La cuenta con propina es $${finalPrice}.`);
                }
                alert("Muchas gracias por su visita!");
                break;
            default:
                alert("Error, la opción ingresada no es válida.");
                op = Number(prompt(firstMessage));
        }
    }    
}

// function piramid() {
//     let n = parseInt(prompt("Ingrese un número"));
//     let message = "*"
//     while(isNaN(n) || n < 0) {
//         alert("Error, debe ingresar un número positivo.");
//         n = Number(prompt("Ingrese un número"));
//     }
//     for (let i = 1; i < n; i ++) {
//         console.log(message.repeat(i));
//     }
    
//     for (let i = n; i > 0; i--) {
//         console.log(message.repeat(i));
//     }
// }


// function piramid() {
//     let n = parseInt(prompt("Ingrese un número"));
//     let message = ""
//     let line = ""
//     while(isNaN(n) || n < 0) {
//         alert("Error, debe ingresar un número positivo.");
//         n = Number(prompt("Ingrese un número"));
//     }
//     for (let i = 1; i < n; i ++) {
//         line += "*";
//         message += line + "\n";
//     }
//     for (let i = n; i > 0; i--) {
//         line = "";
//         for (let j = 1; j <=i; j++) {
//             line += "*";
//         }
//         message += line + "\n";
//     }
//     console.log(message);
// }


function piramid() {
    let n = parseInt(prompt("Ingrese un número"));
    let upperTriangle = "";
    let bottomTriangle = "";
    while(isNaN(n) || n < 0) {
        alert("Error, debe ingresar un número positivo.");
        n = Number(prompt("Ingrese un número"));
    }
    for (let i = 0; i < n; i++) {
        let line = "";
        for (let j = 0; j <= i; j++) {
            line += "*"; 
        }
        if (i < n - 1) {
            upperTriangle = upperTriangle + line + "\n";
            bottomTriangle = "\n" + line + bottomTriangle;
        } else if (i == n - 1) {
            upperTriangle += line;
        }
    }
    console.log(upperTriangle + bottomTriangle)
}

function calculateFactorial() {
    let n = Number(prompt("Ingrese un número"));
    let result = 1;
    while(isNaN(n) || n < 0) {
        alert("Error, debe ingresar un número positivo.");
        n = Number(prompt("Ingrese un número"));
    }
    for (let i = 1; i <= n; i ++) {
        result *= i;
    }
    alert(`El factorial de ${n} es ${result}.`);
}