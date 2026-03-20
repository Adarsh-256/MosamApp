import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';

export default function SearchBox({ updateInfo }) {

  let [error, setError] = useState(false);   // 🔥 fix: boolean
  let [city, setCity] = useState("");

  let API_KEY = "f6269ceb0abb1ff9b66b71f65e60c23f";
  let API_URL = "https://api.openweathermap.org/data/2.5/weather";

  let getWeatherInfo = async () => {
    let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}`);
    let jsonResponse = await response.json();
    console.log(jsonResponse);

    if (jsonResponse.cod !== 200) {
      throw new Error("City not found");
    }

    let result = {
     temp: (jsonResponse.main.temp - 273.15).toFixed(1),
      humidity: jsonResponse.main.humidity,
      pressure: jsonResponse.main.pressure,
      weather: jsonResponse.weather[0].main,
      city: jsonResponse.name,
      country: jsonResponse.sys.country,
    };

    return result;
  };

  let handleChange = (evt) => {
    setCity(evt.target.value);
  };

  let handleSubmit = async (evt) => {
    evt.preventDefault();

    try {
      let newinfo = await getWeatherInfo();   // 🔥 fix: no argument
      setCity("");
      setError(false);
      updateInfo(newinfo);
    } catch (err) {
      setError(true);
    }
  };

  return (
    <div style={{ textAlign: "center" }}>

      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "12px",
          marginTop: "40px",
        }}
      >
        <TextField
          label="Search City..."
          variant="outlined"
          value={city}
          onChange={handleChange}

          sx={{
            background: "rgba(255,255,255,0.9)",
            borderRadius: "12px",
            width: "260px",
            backdropFilter: "blur(10px)",
          }}
        />

        <Button
          type="submit"
          variant="contained"

          sx={{
            padding: "10px 20px",
            borderRadius: "12px",
            fontWeight: "bold",
            background: "linear-gradient(45deg, #2196F3, #21CBF3)",
            boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
            transition: "0.3s",

            "&:hover": {
              transform: "scale(1.05)",
              boxShadow: "0 6px 20px rgba(0,0,0,0.3)",
            },
          }}
        >
          🔍 Search
        </Button>
      </form>

      {error && (
        <h3
          style={{
            color: "#ff4d4d",
            marginTop: "20px",
            background: "rgba(255,255,255,0.2)",
            display: "inline-block",
            padding: "8px 15px",
            borderRadius: "10px",
          }}
        >
          ❌ No such city found! Try again
        </h3>
      )}

    </div>
  );
}