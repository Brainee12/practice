async function getWeather() {
    const city = document.getElementById('city').value;
    const apiKey = 'cf58922f38771a43072c71564dc731e6';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        
        if (data.cod === 200) {
            const weatherData = `
                <h2>${data.name}</h2>
                <p>${data.weather[0].description}</p>
                <p>Temperature: ${data.main.temp}°C</p>
                <p>Humidity: ${data.main.humidity}%</p>
                <p>Wind Speed: ${data.wind.speed} m/s</p>
            `;
            document.getElementById('weatherResult').innerHTML = weatherData;
        } else {
            document.getElementById('weatherResult').innerHTML = `<p>City not found</p>`;
        }
    } catch (error) {
        console.error('Error fetching the weather data:', error);
        document.getElementById('weatherResult').innerHTML = `<p>Error fetching the weather data</p>`;
    }
}
