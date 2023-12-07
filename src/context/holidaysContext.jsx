import { createContext, useState } from "react";
import { useHolydays } from "../hooks/useHolidays";

export const holidaysContext = createContext({})

export const HolidaysContextProvider = ({children}) => {
  const [holiday, setHoliday] = useState(' Выбрать праздник')
  const [holidays] = useHolydays()

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