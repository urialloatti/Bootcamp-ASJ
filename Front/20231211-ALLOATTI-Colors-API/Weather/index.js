const btnSubmit = document.getElementById("submit");
const cityInput = document.getElementById("city-input");
const city = document.getElementById("city");

btnSubmit.addEventListener("click", () => {
    let city = cityInput.value;

    fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city +"&appid=1a9b3670ada3ece0551373f7325e028d")
        .then((response) => response.json())
        .then((json) => {console.log(json)
            document.querySelector("#city").textContent = json.name;
            document.querySelector("#temperature").innerHTML = json.main.temp + "<sup>°C</sup>.";
            document.querySelector("#description").textContent = json.weather[0].description;
            document.querySelector("#wicon").src = `https://openweathermap.org/img/wn/${json.weather[0].icon}@2x.png`;
        });


        document.querySelector(".container").style.visibility = "visible"
})
