const btnSubmit = document.getElementById("btn-submit");
const h1 = document.getElementById("h1");
const h2 = document.getElementById("h2");


btnSubmit.addEventListener("click", () => {
    let inputName = document.getElementById("input-name");
    let inputSurame = document.getElementById("input-surname");
    h1.style.color = "red";
    h1.innerHTML = inputName.value;
    h2.innerHTML = inputSurame.value;
})