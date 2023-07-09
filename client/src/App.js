import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Buy from './components/Buy/Buy';

function App() {
  return (
    <>
      <Header />

      <div className='content'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/buy" element={<Buy />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
