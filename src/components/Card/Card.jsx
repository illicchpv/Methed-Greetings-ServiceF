import style from './Card.module.css'
import Compliment from './Compliment/Compliment'
import ImageCard from './ImageCard/ImageCard'
import CardBG from '../../img/card-bg.jpg'


export default function Card(props) {
  return (
    <div className={style.card}>
      <div className={style.wrapper}>
        <div className={style.image}>
          <ImageCard img={CardBG} />

          <Compliment />
        </div>
      </div>
    </div>

  )
}