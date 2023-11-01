import hotbg from "./images/hot.jpg";
// import coldbg from "./images/cold.jpg";
import coldimg from "./images/coldimg.jpg";
import Description from "./description.jsx";
import {getFormattedWeatherData} from "./weather.js"
import {useEffect, useState} from "react";

function App() {
  const[weather,setWeather]=useState(null);
  const[units,setUnits]=useState('metric');
  const[city,setCity]=useState("Udaipur");
  const[bg,setbg]=useState(coldimg);
  useEffect(() => {
    const fetchWeatherData = async()=>{
    const data=await getFormattedWeatherData(city,units);
    setWeather(data);

    const threshold=units==="metric"?30:86;

    if(data.temp>=threshold){setbg(hotbg);}
    else{setbg(coldimg);}
  };
    fetchWeatherData();
  },[units,city])
  const handleUnitsCick=(e)=>{
    const button=e.currentTarget;
    const currentUnit=e.innerText;
    const isCelcius = currentUnit==="℃";
    button.innerText=isCelcius?"℉":"℃";

    setUnits(isCelcius?"metric":"imperial");
 }
 const enterKeyPressed =(e)=>{
if(e.keyCode===13){
  setCity(e.currentTarget.value);
  e.currentTarget.blur();
 }
 }
 
  return(
    

    <div className="app" style={{backgroundImage:`url(${bg})`}}>
    
      <div className="overlay">
      {
        
        weather && (<div className="container">
        <h1>Weather App</h1>
          <div className="section section__inputs">
            <input onKeyDown={enterKeyPressed} type="text" name="city" placeholder="Enter City" />
            <button onClick={(e)=>{handleUnitsCick(e)}}>℉</button>
          </div>
          <div className="section section__temperature">
            <div className="icon">
              <h3>{`${weather.name},${weather.country}`}</h3>
              <img src={weather.iconURL} alt="Weather-image" />
              <h3>{weather.description}</h3>
            </div>
            <div className="temperature">
              <h1>{`${weather.temp.toFixed()}${units==="metric"?"℃":"℉"}`}</h1>
            </div>
          </div>
          {/* bottom description */}
          <Description weather={weather} units={units}/>
        </div>)
      }
        
      </div>
    </div>
  );
}

export default App;
