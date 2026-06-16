const WeatherIcon = ({ code, isDay = true, className = "" }) => {
  let iconClass = "wi wi-day-sunny";

  if (code === 0) {
    iconClass = isDay ? "wi-day-sunny" : "wi-night-clear";
  } 
  else if (code >= 1 && code <= 3) {
    if (code === 1) iconClass = isDay ? "wi-day-cloudy" : "wi-night-alt-cloudy";
    else if (code === 2) iconClass = isDay ? "wi-day-cloudy" : "wi-night-alt-cloudy";
    else iconClass = isDay ? "wi-day-sunny-overcast" : "wi-night-alt-cloudy";
  }
  else if (code >= 45 && code <= 48) {
    iconClass = "wi-fog";
  }
  else if (code >= 51 && code <= 57) {
    iconClass = "wi-sprinkle"; 
  }
  else if (code >= 61 && code <= 67) {
    iconClass = code >= 66 ? "wi-rain-mix" : "wi-rain";
  }
   else if (code >= 71 && code <= 77) {
    iconClass = "wi-snow";
  }
  else if (code >= 80 && code <= 82) {
    iconClass = "wi-showers";
  }
  else if (code >= 85 && code <= 86) {
    iconClass = "wi-snow";
  }
   else if (code >= 95 && code <= 99) {
    iconClass = code >= 96 ? "wi-thunderstorm" : "wi-thunderstorm";
  }



  return <i className={`wi ${iconClass} ${className}`}></i>;
};

export default WeatherIcon;   