import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Card from './components/Card/Card'
import { TextContextProvider } from './context/textContext';
import { ImgContextProvider } from './context/imgContext';
import { HolidaysContextProvider } from './context/holidaysContext';

const wrapper = {
  display: 'flex',
  flexDirection: 'column',
  height: '100vh',
}
function App() {
  return (
    <div style={wrapper}>
      <HolidaysContextProvider>
      <ImgContextProvider>
      <TextContextProvider>

        <Header />
        <Card/>
        <Footer />

      </TextContextProvider>
      </ImgContextProvider>
      </HolidaysContextProvider>
    </div>
  );
}

export default App;
