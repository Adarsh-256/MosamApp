import SearchbBox from "./searchbox";
import InfoBox from "./infoBox";
import { useState } from "react";
import "./weatherApp.css";

export default function WeatherApp(){
  const [weatherInfo,setweatherInfo] = useState({
    weather:"Mist",
    temp: 294.2,
    humidity: 78,
    pressure: 1014,
     city: "Delhi",
     country: "IN"
  });
 
  let updateInfo = (result) => {
    setweatherInfo(result);
  };
const CLEAR_URL = "https://images.unsplash.com/photo-1601134467661-3d775b999c8b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
const MIST_URL = " https://images.unsplash.com/photo-1502086223501-7ea6ecd79368";
const HAZE_URL = "https://media.istockphoto.com/id/1089026982/photo/image-of-winter-fog-scene-in-delhi-with-india-gate-as-a-background.webp?a=1&b=1&s=612x612&w=0&k=20&c=MQ6ONlYlQ75EzP0d9wX-VTcR_LtAjYXALooBxaCCNcs=";
const SNOW_URL = "https://media.istockphoto.com/id/533292615/photo/alley-in-snowy-morning.jpg?s=2048x2048&w=is&k=20&c=Bk3suOKOiKC1gyNbFjlHqYrGB-OyHUwyJu_7Ncujcd8=";
const COLD_URL = "https://images.unsplash.com/photo-1612208695882-02f2322b7fee?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
const HOT_URL= "https://images.unsplash.com/photo-1561647784-2f9c43b07a0b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aG90JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
const CLOUD_URL= "https://plus.unsplash.com/premium_photo-1669823619740-20d35e206d66?q=80&w=1984&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";  
const RAIN_URL = "https://media.istockphoto.com/id/1257951336/photo/transparent-umbrella-under-rain-against-water-drops-splash-background-rainy-weather-concept.webp?a=1&b=1&s=612x612&w=0&k=20&c=sw_CRZcGopaGHDWqtT1M8y64k5uCcq-nro55Bw3YzyQ=";
  const styles={
  fontFamily: "Arial, sans-serif",
  color: "#333",
  textShadow: "1px 1px 2px rgba(0,0,0,0.1)"
 }
  const getBackground = () => {
  const weather = weatherInfo.weather.toLowerCase();
  const temp = parseFloat(weatherInfo.temp);
  const humidity = weatherInfo.humidity;

  // 🌧 Rain (priority high)
  if (weather.includes("rain") || weather.includes("drizzle") || humidity > 80)
    return RAIN_URL;

  // ❄️ Snow
  if (weather.includes("snow"))
    return SNOW_URL;

  // 🌫 Mist / Fog
  if (weather.includes("mist") || weather.includes("fog"))
    return MIST_URL;

  // 🌁 Haze / Smoke
  if (weather.includes("haze") || weather.includes("smoke"))
    return HAZE_URL;

  // ☁️ Clouds
  if (weather.includes("cloud"))
    return CLOUD_URL;

  // ☀️ Clear sky
  if (weather.includes("clear"))
    return CLEAR_URL;

  // 🔥 Temperature fallback
  if (temp > 30) return HOT_URL;
  if (temp < 10) return COLD_URL;

  return CLOUD_URL;
};


    return(
      <div style={{
  backgroundImage: `url(${getBackground()})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  minHeight: "100vh",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "flex-start",
  padding: "20px",
  boxSizing: "border-box"
}}>
         <h1 className="app-title"> Weather App by Adarsh </h1>
            <h2 style={styles}>Search any  city to get the weather information.</h2>
            <SearchbBox updateInfo={updateInfo} />
            <InfoBox Info={weatherInfo} />

        </div>
        
       
    )
  }
