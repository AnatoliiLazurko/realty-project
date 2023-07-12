import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Buy from './components/Buy/Buy';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <Header />

      <div className='content'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/buy/house" element={<Buy type='house' />} />
          <Route path="/buy/flat" element={<Buy type='flat' />} />
          <Route path="/buy/villa" element={<Buy type='villa' />} />
          <Route path="/buy/room" element={<Buy type='room'/>} />
        </Routes>
      </div>

      <Footer />
    </>
  );
}

export default App;
