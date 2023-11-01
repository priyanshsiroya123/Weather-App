import React from 'react'
import {FaArrowDown,FaArrowUp,FaWind} from "react-icons/fa";
import {BiHappy} from "react-icons/bi";
import {MdCompress,MdOutlineWaterDrop} from "react-icons/md";
import "./description.css";
export const Description = ({weather,units}) => {
  const tempUnits=units==="metric"?"℃":"℉";
  const windUnits=units==="netric"?"m/s":"m/h";
  const cards= [
    {
    id:1,
    icon:<FaArrowUp/>,
    title:"min",
    data:weather.temp_min.toFixed(),
    units:tempUnits,
    },
    {
      id:2,
      icon:<FaArrowDown/>,
      title:"max",
      data:weather.temp_max.toFixed(),
      units:tempUnits,

    },
    {
      id:3,
      icon:<BiHappy/>,
      title:"feels like",
      data:weather.feels_like.toFixed(),
      units:tempUnits,
    },
    {
      id:4,
      icon:<MdCompress/>,
      title:"pressure",
      data:weather.pressure,
      units:"hPa",
    },
    {
      id:5,
      icon:<MdOutlineWaterDrop/>,
      title:"humidity",
      data:weather.humidity,
      units:"%",
    },
    {
      id:6,
      icon:<FaWind/>,
      title:"wind speed",
      data:weather.speed,
      units: windUnits,
    }


  ]
  return (
    <div className="section section__descriptions">
    {cards.map(({id,icon,title,data,units})=>(
      <div className="card">
        <div key={id} className="description__card-icon">
            {icon}
            <small>{title}</small>
        </div>
        <h2>{`${data} ${units}`}</h2>
       </div>
    ))}
       
    </div>
  )
}
export default Description;
