import React, { createContext } from 'react';
import axios from 'axios';
import {useReducer} from 'react'

export const workersContext = createContext();

const INIT_STATE = {
  workers: [],
  workersToEdit: null,
}

const reducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "GET_WORKERS":
      return {...state, workers: action.payload };
    case "EDIT_WORKERS":
      return { ...state, workersToEdit: action.payload };
    default:
      return state;
  } 
}

const WorkersContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  const getWorkers = async () => {
    let {data} = await axios('http://localhost:8000/workers');
    dispatch({
      type: "GET_WORKERS",
      payload: data,
    })
  }

  return (
    <workersContext.Provider value={{getWorkers: getWorkers , workers: state.workers}}>
      {children}
    </workersContext.Provider>
  );
};

export default WorkersContextProvider;