import style from './Compliment.module.css'
import { useSelector } from 'react-redux'

export default function Compliment() {
  const {text, idText, loading} = useSelector(state => state.text)

  return (
    <p className={style.compliment}>
      {loading === 'loading...' ? 
      'загрузка' : (text === '' ? 'Выберите повод для поздравление' : text)
      }
    </p>
  )
}
