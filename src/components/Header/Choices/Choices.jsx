import { useState } from 'react'
import style from './Choices.module.css'
// import Container from '../Container/Container'
// import { ReactComponent as VKIcon } from '../../img/vk.svg'
// import { ReactComponent as TGIcon } from '../../img/tg.svg'
// import { ReactComponent as PRIcon } from '../../img/pinterest.svg'
// import { ReactComponent as SLIcon } from '../../img/stumbleupon.svg'

const holydays = {
  newyear: 'Новый год',
  birthdayWomen: 'День рождения  Ж',
  birthdayMen: 'День рождения  М',
  womenday: '8 марта',
  knowledgeday: 'День знаний',
}

export default function Choices() {
  const [isOpenChoises, setIsOpenChoises] = useState(false)
  const [holiday, setHoliday] = useState('выбрать праздник')

  const toggleChoises = () => {
    setIsOpenChoises(prev => !prev)
    // setIsOpenChoises(!isOpenChoises)
  }
  const changeHolyday = (title) => {
    setHoliday(title)
    setIsOpenChoises(false)
  }

  return (
    <div className={style.wrapper}>
      <button className={style.button} onClick={toggleChoises} >{holiday}</button>
      {
        isOpenChoises &&
        (<ul className={style.list}>
          {Object.entries(holydays).map((item, i) => (
            <li 
              className={style.item} 
              key={item[0]}
              onClick={() => {changeHolyday(item[1])}}
            >{item[1]}</li>
          ))}
        </ul>
        )
      }
    </div>
  )
}