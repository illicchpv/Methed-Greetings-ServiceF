import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import {Outlet} from 'react-router-dom'

const wrapper = {
  display: 'flex',
  flexDirection: 'column',
  height: '100vh',
}

const Layout = () => {

  // debugger

  return(
    <div style={wrapper}>
      <Header />

      {/* сюда👇 попадает содержимое <Layout/> */}
      <Outlet/>

      <Footer />
    </div>
  )
}
export default Layout