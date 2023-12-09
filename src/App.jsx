import Card from './components/Card/Card'
import EmptyCard from './components/EmptyCard/EmptyCard';
import {Routes, Route} from 'react-router-dom'
import Layout from './components/Layout/Layout';

const  App = () => {

  // debugger

  return (
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<EmptyCard/>}></Route>
        <Route path='card/:holiday' element={<Card/>}></Route>
      </Route>
    </Routes>
  );
}

export default App;
