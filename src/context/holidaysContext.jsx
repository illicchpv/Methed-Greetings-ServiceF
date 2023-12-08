import { createContext, useState } from "react";
// import { useHolydays } from "../hooks/useHolidays";
import { useFetch } from "../hooks/useFetch";
import { URL_API } from "../const/const";

export const holidaysContext = createContext({})

export const HolidaysContextProvider = ({children}) => {
  const [holiday, setHoliday] = useState(' Выбрать праздник')
  // const [holidays] = useHolydays()
  const [holidays] = useFetch(`${URL_API}`)
  // console.log('holidays: ', holidays);

  const changeHolyday = (title) => {
    setHoliday(title)
    // setIsOpenChoices(false)
  }

  return (
    <holidaysContext.Provider value={{holidays, holiday, changeHolyday}}>
      {children}
    </holidaysContext.Provider>
  )
}