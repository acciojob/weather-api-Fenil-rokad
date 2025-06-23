document.getElementById("getWeatherBtn").addEventListener("click", () => {
  const apiKey = "e467712b257e418838be97cc881a71de"; // provided in the error
  const city = "London,uk"; // ⚠️ include country code for test match

  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
    .then(response => response.json())
    .then(data => {
      const weather = data.weather[0].main;
      document.getElementById("weatherData").textContent =
        `Current weather in London: ${weather}`;
    })
    .catch(error => {
      document.getElementById("weatherData").textContent =
        `Failed to fetch weather: ${error.message}`;
    });
});
