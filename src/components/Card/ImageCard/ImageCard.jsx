// import style from './ImageCard.module.css'

import { useContext } from "react"
import { imgContext } from "../../../context/imgContext"
import CardBG from '../../../img/card-bg.jpg'
// console.log('CardBG: ', CardBG);

export default function ImageCard(props) {
  const {urlImg} = useContext(imgContext)
  // console.log('2222img: ', urlImg);
  
  return (
    <img src={urlImg || CardBG} alt="фон открытки" width={840} height={520} />
  )
  // className={style.img} 
}