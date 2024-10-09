async function getWeather(city) {
    const apiUrl = `https://wttr.in/${city}?format=j1`;

    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error(`City not found (${response.status})`);
        }

        const data = await response.json();
        displayWeather(data,city);
    } catch (error) {
        alert(error.message);
    }
}
function displayWeather(data, city) {
    const cityName = document.getElementById('city-name');
    const temp = document.getElementById('temp');
    const humidity = document.getElementById('humidity');
    const weatherIcon = document.getElementById('weather-icon');

    cityName.innerText = `City Name: ${city}`;
    temp.innerText = `Temperature: ${data.current_condition[0].temp_C} °C`;
    humidity.innerText = `Humidity: ${data.current_condition[0].humidity} %`;

    const weatherDesc = data.current_condition[0].weatherDesc[0].value;
    weatherIcon.innerText = `Weather: ${weatherDesc}`;
}
document.getElementById('search-btn').addEventListener('click', () => {
    const cityInput = document.getElementById('city-name-input').value;
    if (cityInput) {
        getWeather(cityInput);
    } else {
        alert("Please enter a city name.");
    }
});
