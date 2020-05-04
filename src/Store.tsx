import React from "react";
import { IAction, IState } from "./interfaces";

const initialState: IState = {
  // Defining initial state
  episodes: [],
  favourites: [],
  random: [],
};

export const Store = React.createContext<IState | any>(initialState);

function reducer(state: IState, action: IAction): IState {
  switch (action.type) {
    case "FETCH_DATA":
      return {
        ...state,
        episodes: action.payload,
      };
    case "ADD_FAV":
      return {
        ...state,
        favourites: [...state.favourites, action.payload],
      };
    case "REMOVE_FAV":
      return {
        ...state,
        favourites: action.payload,
      };
    case "RANDOM_EPISODE":
      return {
        ...state,
        random: [action.payload],
      };
    default:
      return state;
  }
}

export function StoreProvider({
  children,
}: JSX.ElementChildrenAttribute): JSX.Element {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  return (
    <Store.Provider value={{ state, dispatch }}>{children}</Store.Provider>
  );
}
