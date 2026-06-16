import axios from "axios"



export async function getWeather(lat, lon) {
  try{
    const res = await axios.get('https://api.open-meteo.com/v1/forecast', {
      params: {
        latitude: lat,
        longitude: lon,
        current: [
          "temperature_2m", 
          "relative_humidity_2m", 
          "weather_code", 
          "wind_speed_10m",
          "is_day"
        ],

        hourly: [
          "temperature_2m", 
          "rain", 
          "weather_code",
          "visibility"
        ],

        timezone: "auto", 
        
        temperature_unit: "celsius",
        wind_speed_unit: "kmh"
     }})

    return res.data

  }catch(error){
    if(error.response){
      console.error("Fetch Error:", error.response);
       throw new Error(error.response.data.reason || 'Failed to fetch data');
        
    }

  }
}