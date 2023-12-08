// import style from './ImageCard.module.css'

import { useContext } from "react"
import { imgContext } from "../../../context/imgContext"
import CardBG from '../../../img/card-bg.jpg'

export default function ImageCard(props) {
  const {urlImg} = useContext(imgContext)
  
  return (
    <img src={urlImg || CardBG} alt="фон открытки" width={840} height={520} />
  )
}