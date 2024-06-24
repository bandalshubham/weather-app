import react, { useState } from "react";
import IconButton from "../IconButton/IconButton";

import Card from "../Card/Card";
import { useStateContext } from "../../Provider/contextProvider";

export default function SearchBar() {
  const { data, setData } = useStateContext()
  console.log("TODO : change button search to button add");
  return (
    <>
      <div className="form-group">
        <label>Add Location</label>
        <input type="text" className="form-control" id="current-city" />
        <IconButton
          data={data}
          setData={setData}
        ></IconButton>
      </div>
    </>
  );
}
