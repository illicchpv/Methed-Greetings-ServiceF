import { useContext, useState, useEffect } from 'react'
import style from './Choices.module.css'
import { URL_API } from '../../../const/const'
import { useSelector, useDispatch } from 'react-redux'
import { fetchHolidays, setHoliday } from '../../../store/holidaysSlice'
import { fetchText } from '../../../store/textSlice'

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
          {Object.entries(holidays).map((item, i) => (
            <li 
              className={style.item} 
              key={item[0]}
              onClick={() => {
                dispatch(setHoliday(item[0]))
                dispatch(fetchText(item[0]))
                setIsOpenChoices(false)
              }}
            >{item[1]}</li>
          ))}
        </ul>
        )
      }
    </div>
  )
}
