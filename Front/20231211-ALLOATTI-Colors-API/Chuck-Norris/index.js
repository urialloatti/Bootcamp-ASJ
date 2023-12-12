const btn = document.getElementById("btn");
const text = document.getElementById("text");

btn.addEventListener("click", () => {
    fetch("https://api.chucknorris.io/jokes/random")
        .then(response => response.json())
        .then(json => text.innerText = json.value)
        .catch((e) => console.log(e))
    
})