// import style from './ImageCard.module.css'

// import { useContext } from "react"
// import { imgContext } from "../../../context/imgContext"
import CardBG from '../../../img/card-bg.jpg'
import { useSelector } from "react-redux"

export default function ImageCard(props) {
  // const {urlImg} = useContext(imgContext)
  const {urlImg} = useSelector(state => state.image)
  
  return (
    <img src={urlImg || CardBG} alt="фон открытки" width={840} height={520} />
  )
}