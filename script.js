const api = {
    key = "fd6493c50f5a4c7c51a4531bea972f0e",
    base = "https://api.openweathermap.org/data/2.5/",
};

const searchBox = document.querySelector(".search-box");
searchBox.addEventListener('keypress', setQuery);

function setQuery(evt){
    if (evt.keyCode == 13){
        getResult(searchBox.value);
        console.log(searchBox.value);
    }
}
function getResult(query){
    fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
    .then(weather => {
        return weather.json();
    })
    .then(displayResults);
}
function displayResults(weather){
    console.log(weather)
    let city = document.querySelector('.location .city');
    city.innerText = ${weather.name}, ${weather.sys.country};

    let now = new Date();
    let date = document.querySelector(".location .date");
    date.innerText = dateBuilder(now);

    let temp = document.querySelector('.current .temp');
    temp.innerHTML = `${Math.round(weather.main.temp)}<span>°C</span>`;

    let weather_el = document.querySelector('.current .weather');
    weather_el.innerHTML = weather.weather[0].main;

    let hiLow = document.querySelector('.current .hi-low');
    hiLow.innerHTML = `${Math.round(weather.main.temp_min)}°C ${Math.round(weather.main.temp_max)}°C`
    }
function dateBuilder(d){
    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    let day = days[d.getDays()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day}, ${date}, ${month}, ${year}`;
}