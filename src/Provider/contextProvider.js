import React, { createContext, useContext, useState } from "react";

const StateContext = createContext();

//declare initial object state for multiple state
//initial state of navbar pages


//function takes children as props, declaring all state inside {block} and return it
export const ContextProvider = ({ children }) => {
    const [data, setData] = useState([]); //toggle sidebar


  return (
    //always return children inside <contextProvider> to access anything provided inside it value={Access-This-State: stateName}
    <StateContext.Provider
      value={{
        data,
        setData
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

//access specific state using useStateContext.. for now returning all state declared inside it
export const useStateContext = () => useContext(StateContext);
