import { useEffect, useState } from "react"
// import { URL_API } from "../const/const"

export const useFetch = (url) => {
  const [data, setData] = useState({})
  const [error, setError] = useState('')

  useEffect(() => {
    // console.log('useFetch useEffect url: ', url);
    if(!url || url.indexOf('/ ') >= 0 ) return // 

    (async () => {
      try{
        const res = await fetch(url)
        if(res.ok){
          setData(await res.json())
        }else{
          throw new Error(`useFetch [${url}] -- ${res.status} ${res.statusText ? ('- ' + res.statusText) : ''}`)
        }
      }catch(err){
        setError(err)
      }

    })()
  }, [url]);

  return [data, error]
}


/*
export const useFetch = (url) => {
  // console.log('useFetch url: ', `[${url}]`);
  const [data, setData] = useState({})
  const [error, setError] = useState({})

  useEffect(() => {
    // debugger
    if(!url || url.startsWith(' ')) return
    let _url = url // `${URL_API}image/${url}`
    // console.log(`useFetch.useEffect fetch(${_url})`)

  //   (async () => {
  //     try{
  //       const resp = await fetch(_url)
  //       if(resp.ok){
  //         setData(await resp.json())
  //       } else {
  //         throw new Error(`useFetch [${_url}] -- ${resp.status} - ${resp.statusText}`)
  //       }
  //     }catch(err){
  //       // console.error(err)
  //       setError(err)
  //     }
  // })()

    fetch(_url)
      .then(resp=>{
        if(!resp.ok){
          throw new Error(`useFetch [${_url}] -- ${resp.status} - ${resp.statusText}`)
        }
        return resp.json()
      })
      .then(data => {
        // console.log('data: ', data);
        if(data.idImg){
          setData(data)
        }
      })
      .catch(err => {
        console.error('useFetch err: ', err)
        setError(err)
      })

  }, [url])

  return [data, error]
}

*/