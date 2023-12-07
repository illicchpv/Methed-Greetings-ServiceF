import { useEffect, useState } from "react"
import { URL_API } from "../const/const"

export const useText = (holyday) => {
  console.log('holyday: ', `[${holyday}]`);
  const [text, setText] = useState(`Выберите повод для поздравления`)

  useEffect(() => {
    if(!holyday || holyday.startsWith(' ')) return
    const url = `${URL_API}text/${holyday}`
    console.log(`useText.useEffect fetch(${url})`)
    fetch(url)
      .then(resp=>{
        if(!resp.ok){
          throw new Error(resp.status + ' ' + resp.statusText)
        }
        return resp.json()
      })
      .then(data => {
        // console.log('data: ', data);
        if(data.text){
          setText(data.text)
        }
      })
      .catch(err => {
        console.log('err: ', err)
      })
  }, [holyday])

  return [text]
}

