import "./App.css"
import{useState,useEffect} from "react"
function App(){
const[city,setCity]=useState('')
const[temp,setTemp]=useState(false)
const[weather,setWeather]=useState([])
useEffect(()=>{
  const url='https://api.weatherapi.com/v1/forecast.json'
  const api_key='5332a1e8a2ad4cd481243914252304'
  fetch(`${url}?key=${api_key}&q=hyderabad`)
  .then(response=>response.json())
  .then(data=>{
      setWeather(data)
      setTemp(true)
      setCity('')
  })
},[])
const searchWeather=()=>{
 const url='https://api.weatherapi.com/v1/forecast.json'
const api_key='5332a1e8a2ad4cd481243914252304'
fetch(`${url}?key=${api_key}&q=${city}`)
.then(response=>{
  if(!response.ok){
    alert('Location not Found')
  }
  else{
    response.json()
    .then(data=>{
      console.log(data)
      setWeather(data)
    setCity('')})
     
  }}
 
 )
}
return(
  <>
     <div className="main">
        <div className="child1">
          <input type="text" id="inp" placeholder="search city only..." onChange={(event)=>{setCity(event.target.value)}}/>
          <button id="btn" onClick={searchWeather}>Search</button>
        </div>
        {temp&&<>
           <div className="child2">
            <img src={weather.current.condition.icon} height='130px'/>
           <h1>{weather.current.temp_c}°C</h1>
           <h2>{weather.location.name}</h2>
           <h3>{weather.location.region}</h3>
           <h4>{weather.location.country}</h4>
         </div>
         <div className="child3">
           <h1>Humidity: {weather.current.humidity}</h1>
           <h1>Sunrise: {weather.forecast.forecastday[0].astro.sunrise}</h1>   
           <h1>Sunset: {weather.forecast.forecastday[0].astro.sunset}</h1>     
           <h1>Min: {weather.forecast.forecastday[0].day.mintemp_c}°C</h1>   
           <h1>Max: {weather.forecast.forecastday[0].day.maxtemp_c}°C</h1>   
           <h1>Wind Speed: {weather.forecast.forecastday[0].day.maxwind_kph}km\h</h1>
         </div>
        </>
        }
     </div>
  </>
)  
}
export default App
