import CardBG from '../../../img/card-bg.jpg'
import { useSelector } from "react-redux"

export default function ImageCard(props) {
  const {urlImg} = useSelector(state => state.image)
  
  return (
    <img src={urlImg || CardBG} alt="фон открытки" width={840} height={520} />
  )
}