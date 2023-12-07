import { useEffect, useState } from "react"
import { URL_API } from "../const/const"

export const useHolydays = () => {
  const [holidays, setHolidays] = useState({})

  useEffect(() => {
    console.log(`useHolydays.useEffect fetch(${URL_API})`)
    fetch(URL_API)
      .then(resp=>{
        if(!resp.ok){
          throw new Error(resp.status + ' ' + resp.statusText)
        }
        return resp.json()
      })
      .then(data => {
        setHolidays(data)
      })
      .catch(err => {
        console.log('err: ', err)
      })
  }, [])

  return [holidays]
}

