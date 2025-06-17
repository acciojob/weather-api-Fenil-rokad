//your JS code here. If required.
document.getElementById("getWeatherBtn").addEventListener("click", getWeather);

function getWeather() {
  const apiKey = "YOUR_API_KEY_HERE"; // Replace with your actual OpenWeatherMap API key
  const city = "London";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error("Failed to fetch weather data");
      }
      return response.json();
    })
    .then(data => {
      const weather = data.weather[0].main;
      document.getElementById("weatherData").innerText = `Current weather in ${city}: ${weather}`;
    })
    .catch(error => {
      console.error("Error:", error);
      document.getElementById("weatherData").innerText = "Error fetching weather data.";
    });
}
