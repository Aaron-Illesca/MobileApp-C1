function showweatherDetails(event) {
    event.preventDefault();

    const cityInput = document.getElementById('city');
    const weatherInfo = document.getElementById('weatherInfo');
    const city = cityInput.value.trim();
    const apiKey = '015aa5db5c3afd2eac7555e1fa325aac';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Ciudad no encontrada. Por favor, intenta de nuevo.');
            }
            return response.json();
        })
        .then(data => {
            weatherInfo.innerHTML = `
                <h2>Weather in ${data.name}</h2>
                <p>Temperature: ${data.main.temp} &#8451;</p>
                <p>Weather: ${data.weather[0].description}</p>
            `;
        })
        .catch(error => {
            weatherInfo.innerHTML = `<p style="color: red;">${error.message}</p>`;
            console.error('Error:', error);
        });
}

 document.getElementById('weatherForm').addEventListener('submit',showweatherDetails );