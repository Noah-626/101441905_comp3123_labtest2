import React, { useState } from "react";
import WeatherCard from "./components/WeatherCard";
import { fetchWeather } from "./api/weather";
import "./App.css";

function App() {
    const [city, setCity] = useState("");
    const [weather, setWeather] = useState(null);
    const [error, setError] = useState(null);

    const handleSearch = async () => {
        if (!city.trim()) {
            setError("Please enter a city name.");
            return;
        }

        try {
            setError(null);
            const data = await fetchWeather(city);
            setWeather(data);
        } catch (err) {
            setError("Could not fetch weather data. Please try again.");
            setWeather(null);
        }
    };

    return (
        <div style={{ textAlign: "center", margin: "20px" }}>
            <h1>Weather App</h1>
            <input
                type="text"
                placeholder="Enter city name"
                value={city}
                onChange={(e) => setCity(e.target.value)}
            />
            <button onClick={handleSearch}>Search</button>
            {error && <p style={{ color: "red" }}>{error}</p>}
            {weather && <WeatherCard weather={weather} />}
        </div>
    );
}

export default App;
