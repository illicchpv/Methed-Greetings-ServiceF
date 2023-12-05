import style from './Header.module.css'
import Container from '../Container/Container'
import Choices from './Choices/Choices'
// import { ReactComponent as VKIcon } from '../../img/vk.svg'
// import { ReactComponent as TGIcon } from '../../img/tg.svg'
// import { ReactComponent as PRIcon } from '../../img/pinterest.svg'
// import { ReactComponent as SLIcon } from '../../img/stumbleupon.svg'

export default function Header() {
  return (
    <header className={style.header}>
      <Container>
        <div className={style.wrapper}>
          <div className={style.buttons}>
            <button className={style.button}>Поменять поздравление</button>
            
            <button className={style.button}>Поменять фон</button>
          </div>

          <Choices />
        </div>
     </Container>
    </header>
  )
}