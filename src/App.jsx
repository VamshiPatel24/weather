import "./App.css"
import{useState} from "react"
function App(){
  const[city,setCity]=useState('');
  const[weather,setWeather]=useState([])
   const searchWeather=()=>{
     const url='https://api.weatherapi.com/v1/forecast.json?'
     const api_key='5332a1e8a2ad4cd481243914252304'
     fetch(`${url}key=${api_key}&q=${city}`)
     .then(response=>response.json())
     .then(data=>{ console.log(data)
       setWeather(data)
     }
    )
     setCity('')
   }
  return(
    <>
      <div className="main">
        <div className="child1">
          <input type="text" 
          id='inp'
          value={city}
          onChange={(e)=>{setCity(e.target.value)}}
          />
          <button id='btn' onClick={searchWeather}>Search</button>
        </div>
        <div className="child2">
          {weather.current.temp_c}
        </div>
      </div>
    </>
  )
}
export default App
