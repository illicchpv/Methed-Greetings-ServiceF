import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Card from './components/Card/Card'
import { ImgContextProvider } from './context/imgContext';

const wrapper = {
  display: 'flex',
  flexDirection: 'column',
  height: '100vh',
}
function App() {
  return (
    <div style={wrapper}>
      <ImgContextProvider>

        <Header />
        <Card/>
        <Footer />

      </ImgContextProvider>
    </div>
  );
}

export default App;
