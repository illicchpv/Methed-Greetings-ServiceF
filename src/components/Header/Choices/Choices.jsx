import { useContext, useEffect, useState } from 'react'
import style from './Choices.module.css'
import { holidaysContext } from '../../../context/holidaysContext'
import { URL_API } from '../../../const/const'
// import { imgContext } from "../../../context/imgContext"

// import Container from '../Container/Container'
// import { ReactComponent as VKIcon } from '../../img/vk.svg'
// import { ReactComponent as TGIcon } from '../../img/tg.svg'
// import { ReactComponent as PRIcon } from '../../img/pinterest.svg'
// import { ReactComponent as SLIcon } from '../../img/stumbleupon.svg'

// const holidays = {
//   newyear: 'Новый год',
//   birthdayWomen: 'День рождения  Ж',
//   birthdayMen: 'День рождения  М',
//   womenday: '8 марта',
//   knowledgeday: 'День знаний',
// }

export default function Choices() {
  const [isOpenChoices, setIsOpenChoices] = useState(false)
  // const [holiday, setHoliday] = useState('выбрать праздник')
  const {holiday, setHoliday} = useContext(holidaysContext)
  const [holidays, setHolidays] = useState({})

  useEffect(() => {
    fetch(URL_API)
      .then(resp=>{
        if(!resp.ok){
          throw new Error(resp.status + ' ' + resp.statusText)
        }
        return resp.json()
      })
      .then(data => {
        setHolidays(data)
      })
      .catch(err => {
        console.log('err: ', err)
      })
  }, [holiday])

  const toggleChoices = () => {
    setIsOpenChoices(prev => !prev)
    // setIsOpenChoices(!isOpenChoices)
  }
  const changeHolyday = (title) => {
    setHoliday(title)
    setIsOpenChoices(false)
  }

  return (
    <div className={style.wrapper}>
      <button className={style.button} onClick={toggleChoices} >{holiday}</button>
      {
        isOpenChoices &&
        (
        <ul className={style.list}>
          {Object.entries(holidays).map((item, i) => (
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