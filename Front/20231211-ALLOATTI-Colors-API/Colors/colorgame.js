const colorDisplay = document.getElementById("colorDisplay");
const h1 = document.getElementById("h1");
const body = document.getElementsByTagName("body");
const message = document.getElementById("message");
const btnHard = document.getElementById("hard");
const btnEasy = document.getElementById("easy");
const btnReset = document.getElementById("reset");
const squareContainer = document.getElementById("container");
let isSolved = false;

function loadPage(num) {
    isSolved = false;
    message.innerText = "";
    btnLoad(num);
    const colors = generateColors(num);
    const option = getNumber(num);
    let pickedColor = colors[option];
    colorDisplay.innerText = pickedColor;
    squareContainer.innerHTML = "";
    
    
    for (let i = 0; i < num; i++) {
        const square = document.createElement("div");
        square.className = "square";
        squareContainer.appendChild(square);
        square.style.backgroundColor = colors[i];
        square.addEventListener("click", () => {
            if (i == option) {
                const cuadrados = document.getElementsByClassName("square");
                victoria(pickedColor, cuadrados);
            } else {
                fallo(square);
            }
        })
    }
}

function generateColors(num) {
    colors = [];
    for (let i = 0; i < num; i++) {
        let cadena = `rgb(${getNumber(256)}, ${getNumber(256)}, ${getNumber(256)})`;
        colors.push(cadena);
    }
    return colors;
}

function victoria(pickedColor, cuadrados) {
    for (let square of cuadrados) {
        square.style.backgroundColor = pickedColor;    }
    message.innerText = "Correcto!";
    h1.style.backgroundColor = pickedColor;
    isSolved = true;
}

function fallo(square) {
    if (!isSolved) {
        square.style.backgroundColor = body[0].style.backgroundColor;
        message.innerText = "Intentelo nuevamente!";
    }

}

function btnLoad(num) {
    btnHard.addEventListener("click", () => {
        btnHard.className = "selected";
        btnEasy.className = "";
        loadPage(6);
    })
    btnEasy.addEventListener("click", () => {
        btnEasy.className = "selected";
        btnHard.className = "";
        loadPage(3);
    })
    btnReset.addEventListener("click", () => {
        loadPage(num);
    })
}

const getNumber = (top) => Math.floor(Math.random() * top);

loadPage(12);

