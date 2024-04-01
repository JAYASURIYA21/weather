import { useState } from "react"
import './weather.css'
import Report from "./report"



export default function Weather(){
  const [city,setCity]=useState('')
  const [display,setDisplay]=useState(false)
  const [currWeather,setCurrWeather]=useState('')
  const [weatherData,setData]=useState('')

  async function handleSubmit(){
    const data=await fetch(`http://api.weatherapi.com/v1/current.json?key=972f9453275d4a1387f133420240104&q=${city}`).then(res=>res.json());
    setDisplay(true)
    setData(data);
    console.log(weatherData);
  }

  return<div className="main-block">
    <div className="container">
        <div><h1>Weather report</h1></div>
        <div className="input-class">
              <input type="text" placeholder="Enter your city" value={city} onChange={(e)=>setCity(e.target.value)}/>
              <button type="submit" onClick={handleSubmit}>Search</button>
        </div>
        <div className="data-container">
            {/* {display && <h1>{city}</h1>}
            <div>   {display && <img src={weatherData.current.condition.icon}/>}</div>
         
           <div> {display && <h3>{weatherData.current.condition.text}</h3>}</div>
            {display && <h1>{weatherData.current.temp_c} C</h1>}
            <h1>this is ur weather report</h1> */}
            {display && <Report data={weatherData}/>}
        </div>
    </div>
  </div>
}