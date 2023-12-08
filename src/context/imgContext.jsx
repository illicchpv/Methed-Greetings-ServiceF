import { createContext, useContext, useState } from "react";
// import { useImg } from "../hooks/useImg";
import { holidaysContext } from "./holidaysContext";
import { useFetch } from "../hooks/useFetch";
import { URL_API } from "../const/const";

export const imgContext = createContext({})

export const ImgContextProvider = ({children}) => {
  const {holiday} = useContext(holidaysContext)
  // console.log('ImgContextProvider holiday: ', holiday);
  // const {urlImg} = useImg(holiday)
  // console.log('ImgContextProvider urlImg: ', urlImg);
  const [{urlImg}, err] = useFetch(`${URL_API}image/${holiday}`)

  return (
    <imgContext.Provider value={{urlImg}}>
      {children}
    </imgContext.Provider>
  )
}