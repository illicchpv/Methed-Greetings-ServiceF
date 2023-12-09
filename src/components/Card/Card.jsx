import { useEffect } from 'react'
import style from './Card.module.css'
import Compliment from './Compliment/Compliment'
import ImageCard from './ImageCard/ImageCard'
import {Link, NavLink, useParams} from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { fetchTextId } from '../../store/textSlice'
import { fetchImageId } from '../../store/imageSlice'

export default function Card(props) {

  const {idText, idImg} = useParams()
  // console.log(useParams())
  // console.log('idImg: ', idImg);
  // console.log('idText: ', idText);
  const dispatch = useDispatch()
  // idText: "bf34962c95"
  // idImg: "3f7d8a2b"
  // single/bf34962c95/3f7d8a2b

  useEffect(() => {
    if(idText && idImg){
      dispatch(fetchTextId(idText))
      dispatch(fetchImageId(idImg))
    }
  }, [])

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