const input = document.getElementById("input-form");
const text = document.getElementById("to-show");

// input.addEventListener("keyup", () => {
//     let vowels = ["a", "e", "i", "o", "u"]
//     let str = input.value;
//     let letter = str[str.length - 1];
//     if (vowels.includes(letter.toLowerCase())) {
//         text.innerHTML += "_"
//     } else {text.innerHTML += letter}
// });

input.addEventListener("keydown", (e) => {
    let vowels = ["a", "e", "i", "o", "u", "á", "é", "í", "ó", "ú"]
    let letter = e.key;
    if (letter.length == 1) {
        if (vowels.includes(letter.toLowerCase())) {
            text.innerHTML += "_";
        } else {text.innerHTML += letter;}
    } else if (letter == "Backspace") { 
        text.innerHTML = text.innerHTML.slice(0, -1);
    }
});
