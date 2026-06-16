import { useEffect, useState } from "react"
import { getWeather } from "./services/weather"
import { LoaderCircle } from "lucide-react"
import WeatherIcon from "./components/WeatherIcon"
import axios from "axios"

function App() {
  const [weather, setWeather]=useState('')
  const [error, setErrors] = useState('')
  const [loading, setLoading] = useState(false)

  const [insightError, setInsightError]=useState('')
  const [insight, setInsight] = useState('')
  const [insightLoading, setInsightLoading] = useState(false)

  useEffect(()=>{
   const fetchInsights = async(current) =>{
    setInsightLoading(true)
    setInsightError('')
    try{

       const res = await axios.post("/api/insight", {
          temperature: current.temperature_2m,
          weatherCode: current.weather_code,
          windSpeed: current.wind_speed_10m,
        })
        console.log(res.data)
        setInsight(res.data.insight)

    }catch(error){
      console.error("Insight fetch failed:", error)
      setInsightError('failed to fetch insights')
    }finally{
      setInsightLoading(false)
    }
   }

    const fetchInitalData = async()=>{
      setLoading(true)
      setErrors('')
      try{
        const data = await getWeather(-1.2921, 36.8219)

        console.log(data)
        setWeather(data)
        fetchInsights(data.current)

      }catch(error){
        console.error(error)
       setErrors(error.message)
      }finally{
        setLoading(false)
      }
    }

    fetchInitalData()
  }, []) 
  if (loading){
    return(
      <div className="loading-icon">
        <LoaderCircle className="size-12 animate-spin text-blue-300" />
        <p className="text-gray-600 font-medium">Fetching weather data...</p>
      </div>
    )
  }

  if (error) {
   return <div className="p-4 text-red-500">Error: {error}</div>;
  }

  const { current, hourly } = weather
  return (
   <div className="min-h-screen bg-gray-50 p-8 font-serif text-primary">
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-xl overflow-hidden p-6">
      
      <div className="text-center mb-6">
        <h1 className="text-2xl font-bold">Weather Forecast</h1>
        <p className="text-sm text-gray-500">Timezone: {weather.timezone}</p>
      </div>

      {current && (
        <div className="text-center mb-8">
          <div className="text-6xl font-bold text-blue-400 mb-2">
            {current.temperature_2m}°C

             <WeatherIcon 
              code={current.weather_code} 
              isDay={current.is_day === 1} 
              className="pl-4 text-6xl text-blue-500" 
            />
          </div>
          <p className="text-gray-600">
            Humidity: {current.relative_humidity_2m}% • 
            Wind: {current.wind_speed_10m} km/h
          </p>
          <p className="text-sm text-gray-400 mt-2">
             Updated: {new Date(current.time).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
          </p>
        </div>
      )}

      {hourly && (
        <div>
          <h2 className="text-lg font-semibold mb-4">Next 5 Hours</h2>
          <div className="flex justify-between gap-2">
            {hourly.time.slice(0, 5).map((time, index) => (
              <div key={time} className="flex flex-col items-center p-2 bg-gray-100 rounded">
                <span className="text-xs text-gray-500">
                  {new Date(time).getHours()}
                </span>
                <span className="font-bold text-blue-600">
                  {hourly.temperature_2m[index]}°
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {insightLoading && (
        <p className="text-sm text-gray-400 mt-4">Generating insight...</p>
      )}
      {insightError && (
        <p className="text-sm text-red-400 mt-4">{insightError}</p>
      )}
      {insight && (
        <div className="mt-4 p-3 bg-blue-100 rounded text-sm text-gray-700">
          {insight}
        </div>
      )}
    </div>
  </div>
  )
}

export default App
