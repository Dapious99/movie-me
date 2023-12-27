import { createContext, useContext } from "react";

const apiDetailsContext = createContext();

const GlobalContext = ({ children }) => {
  const API_KEY = "your_api_key";
  const BASE_URL = "https://api.themoviedb.org/3";
  return (
    <apiDetailsContext.Provider value={(API_KEY, BASE_URL)}>
      {children}
    </apiDetailsContext.Provider>
  );
};
export default GlobalContext;

export function useApiDetails() {
  useContext(apiDetailsContext);
}
