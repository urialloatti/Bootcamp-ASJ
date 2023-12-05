const getOption = message => Number(prompt(message))

const makeOrder = (ticket, total, product, price) => {
    alert(`${product.trim()} pedido`);
    ticket += `${product}    $${price}\n`;
    total += price;
    return [ticket, price]
}

const giveTotal = (total) => `La cuenta actual es $${total}.`

function orderFood(ticket, total) {
    let menuOptions = "1: Café             $750\n2: Té                 $650\n3: Criollitos (2) $500\n4: Medialuna    $800\n0: Volver atrás"
    let opMenu = getOption(menuOptions);
    switch (opMenu) {
        case 1:
            [ticket, total] = makeOrder(ticket, total, "Café      ", 750);
            break;
        case 2:
            [ticket, total] = makeOrder(ticket, total, "Té        ", 650);
            break;
        case 3:
            [ticket, total] = makeOrder(ticket, total, "Criollitos", 500);
            break;
        case 4:
            [ticket, total] = makeOrder(ticket, total, "Medialuna ", 800);
            break;
        case 0:
            alert("Volviendo al menú principal...");
            break;
        default:
            alert("Error, la opción ingresada no es válida.");
            opMenu = getOption(menuOptions);
    }
    return [ticket, total];
}

const tellJoke = () => {
    alert("¿Por qué los programadores prefieren el calor?");
    alert("Porque les gusta tener ventanas abiertas! :)");
}

function payFood(ticket, total) {
    let messageTip = "Que porcentaje desea dejar de propina?"
    let finalPrice = 0
    if (total != 0) {
        alert(giveTotal(total));
        ticket += `\nSubtotal       $${total}\n `
        let opTip = getOption(messageTip);
        while(isNaN(opTip) || opTip < 0) {
            alert("Error, ingrese un número por favor.");
            opTip = getOption(messageTip);
        }
        finalPrice = (total + total * opTip / 100).toFixed(2);
        ticket += `Total          $${finalPrice}\n `;
        alert(ticket);

    }
    alert("Muchas gracias por su visita!");
}

function bar() {
    alert("Buenos días.")
    // Inicializamos variables
    let firstMessage = "Que desea hacer?\n1: Realizar pedido.\n2: Pedir chiste.\n3: Consultar la cuenta al momento.\n4: Pagar y salir."
    let ticket = ""
    let total = 0
    let op = -1
    
    while (op != 4) {
        op = getOption(firstMessage);
        switch (op) {
            case 1:
                [ticket, total] = orderFood(ticket, total);                
                break;
            case 2:
                tellJoke()
                break;
            case 3:
                alert(giveTotal(total));
                break;
            case 4:
                payFood(ticket, total)
                break;
            default:
                alert("Error, la opción ingresada no es válida.");
                op = getOption(firstMessage);
        }
    }    
}


const validatePositive = (message) => {
    let n = Number(prompt(message));
    while(isNaN(n) || n <= 0) {
        alert("Error, debe ingresar un número mayor a 0!");
        n = Number(prompt(message));
    }
    return n;
}

function fibonacci() {
    let top = validatePositive("Ingrese que número calcular")
    const sequence = [1, 1];
    for (let i = 2; i < top; i++) {
        sequence.push(sequence[i-2] + sequence[i-1]);
    }
    console.log(sequence);
    alert(`El ${top}° número de la secuencia es ${sequence[top - 1]}.`);
    return sequence;
}
