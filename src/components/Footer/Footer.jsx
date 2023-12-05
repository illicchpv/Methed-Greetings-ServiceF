import style from './Footer.module.css'
import Container from '../Container/Container'
import { ReactComponent as VKIcon } from '../../img/vk.svg'
import { ReactComponent as TGIcon } from '../../img/tg.svg'
import { ReactComponent as PRIcon } from '../../img/pinterest.svg'
import { ReactComponent as SLIcon } from '../../img/stumbleupon.svg'

export default function Footer() {
  return (
    <footer className={style.footer}>
      <Container>
        <div className={style.wrapper}>
          <div className={style.contacts}>
            <p>Design: <a href="https://t.me/AnastasiaIlina">Anastasia Ilina</a> </p>
            <p>Сoder: <a href="https://t.me/MeMe">MeMe</a></p>
            <p>© HBCard, 2022</p>
          </div>

          <ul className={style.social}>
            <li className={style.itel}>
              <a href="https://vk.com/methed" target='_blank' rel="noreferrer" className={style.link}>
                <VKIcon/>
              </a>
            </li>
            <li className={style.itel}>
              <a href="https://t.me/methed" target='_blank' rel="noreferrer" className={style.link}>
                <TGIcon/>
              </a>
            </li>
            <li className={style.itel}>
              <a href="https://pinterest.com" target='_blank' rel="noreferrer" className={style.link}>
                <PRIcon/>
              </a>
            </li>
            <li className={style.itel}>
              <a href="https://stumbleupon.com" target='_blank' rel="noreferrer" className={style.link}>
                <SLIcon/>
              </a>
            </li>
          </ul>
        </div>
      </Container>
    </footer>
  )
}