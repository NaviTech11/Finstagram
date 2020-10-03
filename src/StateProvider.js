import React, { createContext, useContext, useReducer } from "react";

export const StateContext = createContext();

//Higher order component - Main Purpose to wrap app in the "data layer"
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

//Use this hook to pull data from data layer
export const useStateValue = () => useContext(StateContext);