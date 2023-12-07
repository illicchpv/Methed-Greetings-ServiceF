import { createContext, useContext, useState } from "react";
import { useText } from "../hooks/useText.jsx";
import { holidaysContext } from "./holidaysContext";

export const textContext = createContext({})
export const TextContextProvider = ({children}) => {
  const {holiday} = useContext(holidaysContext)
  const [text] = useText(holiday)
  // const [text, setText] = useState(`
  // Поздравляю с днем рожденья!
  // Пусть будет жизнь полна веселья,
  // Не будет грусти и хлопот,
  // А только счастье круглый год!
  
  // Желаю творческих успехов,
  // Прекрасных дней, улыбок, смеха.
  // Любви, душевного тепла,
  // Как сказка, чтобы жизнь была!

  // `)

  return (
    <textContext.Provider value={{text}}>
      {children}
    </textContext.Provider>
  )
}