import React from "react";
import Card from "../Card/Card";
import { useState } from "react";
export default function IconButton({ data, setData }) {
  navigator.geolocation.getCurrentPosition(getLoction);
  return (
    <>
      <div className="btnContainer">
        <button
          className="btn btn-primary"
          onClick={() => {
            getCurrentLocation();
          }}
        >
          <i className="fa fa-search" aria-hidden="true"></i>
        </button>
      </div>
      <div className="card-container"></div>
    </>
  );

  async function getLoction(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const geoLocationUrl = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`;
    let userLocation = await fetch(geoLocationUrl)
      .then((res) => res.json())
      .then((data) => data);
  }

  async function getCurrentLocation() {
    let currentLocation = document.getElementById("current-city").value;
    const cityName = currentLocation;
    if(currentLocation !=""){
    try {
      const weatherData = await getWheatherDataForCity(cityName);
        setData(current => [...current, weatherData]);
    } catch (error) {
      console.log(error);
    }
    document.getElementById("current-city").value=""
  }else{
    setData(current => [...current, ]);
    window.swal("Not Found!", "The city field cannot be left empty. Please enter a valid city.", "error");
  }
  }

  async function getWheatherDataForCity(cityName) {
    let key = "468b4cc5ce7cec6bc58ad38d44645ef7";
    let weatherData, data;
    let getDataFromApi = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${key}&units=metric`
    );
    try {
      weatherData = await getDataFromApi.json();
      window.swal("Found!", `${weatherData.name}`, "success");
      data = {
        city: weatherData.name,
        windSpeed: weatherData.wind.speed,
        temperature: weatherData.main.temp,
        status: weatherData.weather[0].description,
        humidity: weatherData.main.humidity,
      };
    } catch (error) {
      /// todo need handle 404 property 
      /// todo if city not found then do not append new weather card only show the sweet alert msg 
      if (getDataFromApi.status == "404") {
        window.swal("Not Found!", "Please enter valid city name", "error");
        return ""
      }
    }
    return data;
  }
}
