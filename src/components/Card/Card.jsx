import style from './Card.module.css'
import Compliment from './Compliment/Compliment'
import ImageCard from './ImageCard/ImageCard'


export default function Card(props) {
  return (
    <div className={style.card}>
      <div className={style.wrapper}>
        <div className={style.image}>
          <ImageCard/>

          <Compliment />
        </div>
      </div>
    </div>

  )
}