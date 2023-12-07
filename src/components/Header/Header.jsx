import style from './Header.module.css'
import Container from '../Container/Container'
import Choices from './Choices/Choices'
import Test from './Test/Test';

export default function Header() {
  return (
    <header className={style.header}>
      <Container>
        <div className={style.wrapper}>
          <div className={style.buttons}>
            <button className={style.button}>Поменять поздравление</button>
            
            <button className={style.button}>Поменять фон</button>

            <Test/>
          </div>

          <Choices />
        </div>
     </Container>
    </header>
  )
}