import "./App.css";
import SearchBar from "./Components/SearchBar/SearchBar";
import { useState, useEffect } from "react";
import Card from "./Components/Card/Card";
import { useStateContext } from "./Provider/contextProvider";

function App() {
  const {data,setData} = useStateContext()

  return (
    <div className="App">
      <h1 style={{ textAlign: "center" }}>Weather App</h1>
      <SearchBar data={data} setData={setData} />
      <Card data={data} setData={setData} />
    </div>
  );
}

export default App;
