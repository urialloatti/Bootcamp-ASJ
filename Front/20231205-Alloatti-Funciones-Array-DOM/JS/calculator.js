const result = document.getElementById("result");
const numbers = document.getElementsByClassName("btn-number");
const divide = document.getElementById("btn-divide");
const multiply = document.getElementById("btn-multiply");
const sum = document.getElementById("btn-sum");
const rest = document.getElementById("btn-rest");
const erease = document.getElementById("btn-erease");
const equal = document.getElementById("btn-equals");

let aux;
let opp;
let equalFlag = false;

function manageNumber(num) {
    if (equalFlag) {
        if (num == 0) {
            result.innerHTML = "0";
        } else {result.innerHTML = num.toString();}
        equalFlag = false;
    } else {
        if (result.innerText != "00") {
            if (num == 0) {
                result.innerHTML = "00"
            } else {result.innerHTML += num.toString();}
            
        } else {
            result.innerHTML = num.toString();
        }
    }
}

for (let i = 0; i < numbers.length; i ++) {
    numbers[i].addEventListener("click", () => {
        manageNumber(i);
    });
}

sum.addEventListener("click", () => {
    aux = Number(result.innerText);
    opp = "sum";
    result.innerHTML = "00";
});

rest.addEventListener("click", () => {
    aux = Number(result.innerText);
    opp = "rest";
    result.innerHTML = "00";
});

multiply.addEventListener("click", () => {
    aux = Number(result.innerText);
    opp = "multiply";
    result.innerHTML = "00";
});

divide.addEventListener("click", () => {
    aux = Number(result.innerText);
    opp = "divide";
    result.innerHTML = "00";
});

erease.addEventListener("click", () => {
    aux = undefined;
    opp = undefined;
    result.innerHTML = "00";
});


equal.addEventListener("click", () => {
    let currentValue = Number(result.innerText)
    switch (opp) {
        case "sum":
            result.innerHTML = aux + currentValue;
            aux = Number(result.innerText);
            opp = undefined;
            equalFlag = true;
            break;
        case "rest":
            result.innerHTML = aux - currentValue;
            aux = Number(result.innerText);
            opp = undefined;
            equalFlag = true;
            break;
        case "multiply":
            result.innerHTML = aux * currentValue;
            aux = Number(result.innerText);
            opp = undefined;
            equalFlag = true;
            break;
        case "divide":
            if (currentValue == 0) {
                // alert("Error! no se puede dividir por 0.");
                result.innerHTML = "Error!";
                aux = undefined;
            } else {
                result.innerHTML = (aux / currentValue).toFixed(2);
                aux = Number(result.innerText);
            }
            equalFlag = true;
            opp = undefined;
            break;
    }
});