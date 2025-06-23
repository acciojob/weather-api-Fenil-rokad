document.getElementById("getWeatherBtn").addEventListener("click", () => {
  const apiKey = "425944aceee9c9d7b358663a794c403e"; // Replace with your actual OpenWeatherMap API key
  const city = "London";

  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
    .then(response => {
      if (!response.ok) {
        throw new Error("Network response was not ok " + response.status);
      }
      return response.json();
    })
    .then(data => {
      const weather = data.weather[0].main;
      document.getElementById("weatherData").textContent = `Current weather in London: ${weather}`;
    })
    .catch(error => {
      document.getElementById("weatherData").textContent = `Failed to fetch weather: ${error.message}`;
    });
});
