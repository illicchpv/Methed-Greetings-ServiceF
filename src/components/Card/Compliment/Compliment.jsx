import { useContext } from 'react'
import style from './Compliment.module.css'
import { textContext } from '../../../context/textContext'

export default function Compliment() {
  const {text} = useContext(textContext)
  // console.log('text: ', text);

  return (
    <p className={style.compliment}>
      {text ?? 'Выберите повод для поздравления'}
    </p>
  )
}
/*
      Поздравляю с днем рожденья!<br />
      Пусть будет жизнь полна веселья,<br />
      Не будет грусти и хлопот,<br />
      А только счастье круглый год!<br />
      <br />
      Желаю творческих успехов,<br />
      Прекрасных дней, улыбок, смеха.<br />
      Любви, душевного тепла,<br />
      Как сказка, чтобы жизнь была!<br />
*/