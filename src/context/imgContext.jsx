import { createContext, useContext, useState } from "react";
import { useFetch } from "../hooks/useFetch";
import { URL_API } from "../const/const";
import { useSelector } from "react-redux";

export const imgContext = createContext({})

export const ImgContextProvider = ({children}) => {
  const holiday = useSelector(state => state.holidays.holiday)
  const [{urlImg}, err] = useFetch(`${URL_API}image/${holiday}`)

  return (
    <imgContext.Provider value={{urlImg}}>
      {children}
    </imgContext.Provider>
  )
}