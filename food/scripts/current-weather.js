fetch('https://api.openweathermap.org/data/2.5/weather?lat=37.56040721063298&lon=126.99953094999768&appid=15666693dc3c19d61e8856762aed2bd7')
    .then(response => response.json())
    .then(data => {
        const weatherElement = document.getElementById('weather-info');
        const temperatureElement = document.getElementById('temperature-info');
        const weatherImageElement = document.getElementById('weather-image');
        const temperature = (data.main.temp - 273.15).toFixed(1); 
        const weatherDescription = data.weather[0].description;
        const weatherIcon = data.weather[0].icon;
        weatherElement.textContent = `Weather: ${weatherDescription}`;
        temperatureElement.textContent = `Temperature: ${temperature}°C`;
        weatherImageElement.src = `https://openweathermap.org/img/wn/${weatherIcon}.png`;
        weatherImageElement.alt = weatherDescription;
    })
    .catch(error => {
        console.error('Error fetching weather data:', error);
        document.getElementById('weather-info').textContent = 'Weather: Unavailable';
        document.getElementById('temperature-info').textContent = 'Temperature: Unavailable';
    });