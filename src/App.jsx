import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'

const wrapper = {
  display: 'flex',
  flexDirection: 'column',
  height: '100vh',
}
const style = {
  card: 'card',
  wrapper: 'wrapper',
  image: 'image',
  img: 'img',
  compliment: 'compliment'
}
function App() {
  return (
    <div style={wrapper}>
      <Header />

      <div className={style.card}>
        <div className={style.wrapper}>
          <div className={style.image}>
            <img className={style.img} src="" alt="" />
            <p className={style.compliment}>
              Поздравляю с днем рожденья!<br/>
              Пусть будет жизнь полна веселья,<br/>
              Не будет грусти и хлопот,<br/>
              А только счастье круглый год!<br/>
<br/>
              Желаю творческих успехов,<br/>
              Прекрасных дней, улыбок, смеха.<br/>
              Любви, душевного тепла,<br/>
              Как сказка, чтобы жизнь была!<br/>
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;
