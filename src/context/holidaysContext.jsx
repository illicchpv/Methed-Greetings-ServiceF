import { createContext, useState } from "react";

export const holidaysContext = createContext({})
export const HolidaysContextProvider = ({children}) => {
  const [holiday, setHoliday] = useState('Выбрать праздник')

  return (
    <holidaysContext.Provider value={{holiday, setHoliday}}>
      {children}
    </holidaysContext.Provider>
  )
}