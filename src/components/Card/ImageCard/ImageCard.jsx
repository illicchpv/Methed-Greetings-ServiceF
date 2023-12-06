// import style from './ImageCard.module.css'

import { useContext } from "react"
import { imgContext } from "../../../context/imgContext"

export default function ImageCard(props) {
  const img = useContext(imgContext)
  console.log('img: ', img);
  
  return (
    <img src={props.img} alt="фон открытки" width={840} height={520} />
  )
  // className={style.img} 
}