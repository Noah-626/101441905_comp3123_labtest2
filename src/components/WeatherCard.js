import React from "react";

function WeatherCard({ weather }) {
    const { name, main, weather: weatherDetails, wind } = weather;

    return (
        <div>
            <h2>{name}</h2>
            <h3>{weatherDetails[0].description}</h3>
            <img
                src={`http://openweathermap.org/img/wn/${weatherDetails[0].icon}@2x.png`}
                alt={weatherDetails[0].description}
            />
            <p>Temperature: {main.temp} °C</p>
            <p>Feels Like: {main.feels_like} °C</p>
            <p>Humidity: {main.humidity}%</p>
            <p>Wind Speed: {wind.speed} m/s</p>
        </div>
    );
}

export default WeatherCard; // Ensure the export is correct
