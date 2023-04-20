import React, {createContext, useContext, useReducer} from "react";

// firstly create a context which we will provide to childrens
export const StateContext = createContext();

export const StateProvider= ({reducer, initialState, children})=>(
    <StateContext.Provider value={useReducer(reducer,initialState)}>
        {children}
    </StateContext.Provider>
)

export const useStateValue= () => useContext(StateContext);