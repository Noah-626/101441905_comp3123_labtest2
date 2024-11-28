import axios from "axios";

const API_BASE_URL = "http://api.openweathermap.org/data/2.5/weather";

export const fetchWeather = async (city) => {
    const apiKey = process.env.REACT_APP_WEATHER_API_KEY;
    if (!apiKey) {
        throw new Error("API Key is missing. Check your .env file.");
    }

    try {
        const response = await axios.get(API_BASE_URL, {
            params: {
                q: city,
                appid: apiKey,
                units: "metric",
            },
        });
        return response.data;
    } catch (error) {
        if (error.response) {
            console.error("API Response Error:", error.response.data);
            throw new Error(`API Error: ${error.response.data.message}`);
        } else {
            console.error("Request Error:", error.message);
            throw new Error("Network Error: Could not reach the API.");
        }
    }
};
