// script.js

const apiKey = "001dd14000c78149b7f75d120dd08414"; 

function getWeather() {
  const city = document.getElementById("cityInput").value;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      if (data.cod === 200) {
        const weather = `
          <p><strong>${data.name}</strong></p>
          <p>🌡️ Temperature: ${data.main.temp}°C</p>
          <p>🌥️ Condition: ${data.weather[0].description}</p>
        `;
        document.getElementById("weatherResult").innerHTML = weather;
      } else {
        document.getElementById("weatherResult").innerHTML = `<p>City not found.</p>`;
      }
    })
    .catch(error => {
      document.getElementById("weatherResult").innerHTML = `<p>Error fetching data.</p>`;
    });
}
