const apiKey = 'cdb6b85f2327ea1348c451f79750d10e'; // OpenWeatherMap API Key

function getWeather() {
    const district = document.getElementById('district').value;
    const weatherResult = document.getElementById('weather-result');
    weatherResult.innerHTML = '';

    if (district === '') {
        weatherResult.innerHTML = 'Please enter a district name.';
        return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${district}&appid=${apiKey}&units=metric`;

    fetch(url)
      .then(response => {
          if (!response.ok) {
            throw new Error('District not found');
            }
            return response.json();
        })
  .then(data => {
      const weather = `
         <h2>${data.name}, ${data.sys.country}</h2>
         <p>Temperature: ${data.main.temp}°C</p>
         <p>Weather: ${data.weather[0].description}</p>
         <p>Humidity: ${data.main.humidity}%</p>
         <p>Wind Speed: ${data.wind.speed} m/s</p>
            `;
        weatherResult.innerHTML = weather;
        })
        .catch(error => {
            weatherResult.innerHTML = 'Error: ' + error.message;
        });
}
