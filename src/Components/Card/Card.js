import React from "react";
import './Card.css';
export default function Card({ data,setData }) {
  console.log(data);
  const deleteCard=(index)=>{
    const newCities = data.filter((_, i) => i !== index);
    setData(newCities);
  }
  const date = new Date()
  let daysInWeeks = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  ///Todo, take a data from one place for daysInWeek
  return (<div className="main-container"> {data.map((item,index) => {
    return (
      <div className="wrapper">
        <div className="widget-container">
          <div className="top-left">
            <h1 className="city" id="city">{item.city}</h1>
            <h2 id="day">{daysInWeeks[date.getDay()]}</h2>
            <h3 id="date"> {date.getDate()} - {date.getMonth()} - {date.getFullYear()}</h3>
            <h3 id="time">{date.toLocaleTimeString()}</h3>
            <p className="geo"></p>
          </div>
          <div className="top-right">
          <div className="card-delete" onClick={()=>deleteCard(index)}>
          <i class="fa fa-times" aria-hidden="true"></i>
          </div>
            <h1 id="weather-status">Weather / {item.status}</h1>
            <img className="weather-icon" src="https://myleschuahiock.files.wordpress.com/2016/02/sunny2.png" />
          </div>
          <div className="horizontal-half-divider"></div>
          <div className="bottom-left">
            <h1 id="temperature">{item.temperature}</h1>
            <h2 id="celsius">C</h2>
          </div>
          <div className="vertical-half-divider"></div>
          <div className="bottom-right">
            <div className="other-details-key">
              <p>Wind Speed</p>
              <p>Humidity</p>
            </div>
            <div className="other-details-values">
              <p className="windspeed">{item.windSpeed} Km/h</p>
              <p className="humidity">{item.humidity} 0 %</p>
            </div>
          </div>
        </div>
      </div>
    );
  })}</div>)
}
