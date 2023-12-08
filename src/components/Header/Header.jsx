import style from './Header.module.css'
import Container from '../Container/Container'
import Choices from './Choices/Choices'
import Test from './Test/Test';
import { useDispatch, useSelector } from 'react-redux';
import { fetchText } from '../../store/textSlice';

export default function Header() {
  const dispatch = useDispatch();
  const {holiday, holidays, loading} = useSelector(state => state.holidays)

  return (
    <header className={style.header}>
      <Container>
        <div className={style.wrapper}>
          <div className={style.buttons}>
            <button className={style.button}
              disabled={!holiday}
              onClick={()=>{
                console.log('holiday: ', holiday)
                dispatch(fetchText(holiday))
              }}
            >Поменять поздравление</button>
            
            <button className={style.button}
              disabled={!holiday}
              onClick={()=>{
                console.log('holiday: ', holiday)
              }}
            >Поменять фон</button>

            {/* <Test/> */}
          </div>

          <Choices />
        </div>
     </Container>
    </header>
  )
}