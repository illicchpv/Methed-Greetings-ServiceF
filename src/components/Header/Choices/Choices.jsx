import { useState, useEffect } from 'react'
import style from './Choices.module.css'
import { URL_API } from '../../../const/const'
import { useSelector, useDispatch } from 'react-redux'
import { fetchHolidays, setHoliday } from '../../../store/holidaysSlice'
import { fetchText } from '../../../store/textSlice'
import { fetchImage } from '../../../store/imageSlice'
import {Link, NavLink} from 'react-router-dom'

export default function Choices() {
  const [isOpenChoices, setIsOpenChoices] = useState(false)
  const {holiday, holidays, loading} = useSelector(state => state.holidays)
  const dispatch = useDispatch(); // useDispatch - позволяет вызывать акшены

  useEffect(() => {
    dispatch(fetchHolidays())

  }, [dispatch])

  const toggleChoices = () => {
    if(loading !== 'success') return
    setIsOpenChoices(prev => !prev)
  }

  return (
    <div className={style.wrapper}>
      <button className={style.button} onClick={toggleChoices} >
        {(loading !== 'success') ?
          'Загрузка...' :
          holidays[holiday] || 'выбрать праздник'
        }
      </button>
      {
        isOpenChoices &&
        (
        <ul className={style.list}>
          {Object.entries(holidays).map(([holiday,holidayText], i) => (
            <li 
              className={style.item} 
              key={holiday}
              onClick={() => {
                dispatch(setHoliday(holiday))
                dispatch(fetchText(holiday))
                dispatch(fetchImage(holiday))
                setIsOpenChoices(false)
              }}
            ><NavLink 
              to={`card/${holiday}`}
              className={({isActive})=>(isActive ? style.linkActive : '')}
              >{holidayText}</NavLink></li>
            // NavLink при выборе добавляет класс active
          ))}
        </ul>
        )
      }
    </div>
  )
}
