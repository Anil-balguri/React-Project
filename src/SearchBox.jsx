

// SearchBox.jsx
import TextField from '@mui/material/TextField'; 
import Button from '@mui/material/Button';
import './SearchBox.css';
import { useState } from 'react';

export default function SearchBox({ updateInfo }) {
    const [city, setCity] = useState("");
    const [error, setError] = useState(false);
    const API_URL = "http://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "e9c4e50e6d226473c6f18662981dd219";

    // Function to fetch weather information
    const getWeatherInfo = async () => {
        try {
            // Fetch weather data from OpenWeatherMap API
            const response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            const jsonResponse = await response.json();

            // Check if the API response contains an error code
            if (jsonResponse.cod !== 200) {
                throw new Error("City not found");
            }

            // Prepare the result object with relevant data
            const result = {
                city: jsonResponse.name,
                temp: jsonResponse.main.temp,
                tempMin: jsonResponse.main.temp_min,
                tempMax: jsonResponse.main.temp_max,
                humidity: jsonResponse.main.humidity,
                feelsLike: jsonResponse.main.feels_like,
                weather: jsonResponse.weather[0].description,
            };

            // Return the result if successful
            return result;
        } catch (err) {
            // Log the error and indicate failure by returning null
            console.error(err);
            return null;
        }
    };

    // Function to handle changes in the input field
    const handleChange = (event) => {
        setCity(event.target.value);
    };

    // Function to handle the form submission
    const handleSubmit = async (event) => {
        event.preventDefault();
        setError(false); // Reset error state before making a request

        // Fetch new weather information
        const newInfo = await getWeatherInfo();

        // Check if the response contains valid information
        if (newInfo) {
            updateInfo(newInfo); // Update weather info state in parent component
        } else {
            setError(true); // Set error state if no valid info is returned
        }

        setCity(""); // Clear the input field after submission
    };

    return (
        <div className="SearchBox">
            <h2>Weather Search</h2>
            <form onSubmit={handleSubmit}>
                <TextField
                    id="city"
                    label="City Name"
                    variant="outlined"
                    required
                    value={city}
                    onChange={handleChange}
                />
                <br /><br />
                <Button variant="contained" type="submit">Search</Button>
                {/* Display error message only when the error state is true */}
                {error && <p style={{ color: "red" }}>No such place exists!</p>}
            </form>
        </div>
    );
}
