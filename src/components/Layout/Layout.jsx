import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import {Outlet} from 'react-router-dom'
import { useSelector } from 'react-redux'
import {Link, NavLink, useParams} from 'react-router-dom'

const wrapper = {
  display: 'flex',
  flexDirection: 'column',
  height: '100vh',
}
const btn = {
  display:'block',
  margin: '20px auto',
}

const Layout = () => {
  const {text: {idText}, image: {idImg}} = useSelector(state => state)

  return(
    <div style={wrapper}>
      <Header />

      {/* сюда👇 попадает содержимое <Layout/> */}
      <Outlet/>

      {(idText && idImg) && <Link style={btn} 
          to={`single/${idText}/${idImg}`}
          target='_blank'
        >👉Поделиться открыткой👈</Link> }


      <Footer />
    </div>
  )
}
export default Layout