const input = document.getElementById("input-form");
const text = document.getElementById("to-show");

input.addEventListener("keyup", () => {
    let vowels = ["a", "e", "i", "o", "u"]
    let str = input.value;
    let letter = str[str.length - 1];
    if (vowels.includes(letter.toLowerCase())) {
        text.innerHTML += "_"
    } else {text.innerHTML += letter}
});