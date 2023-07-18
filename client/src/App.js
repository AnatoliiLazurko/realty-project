import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Buy from './components/Buy/Buy';
import Footer from './components/Footer/Footer';
import { Provider } from 'react-redux';
import { store } from './app/store';

function App() {
  return (
    <>
      <Provider store={store}>
        <Header />

        <div className='content'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/buy/:category" element={<Buy />} />
            
            <Route path="*" element={<h1>Page Not Found</h1>} />
          </Routes>
        </div>

        <Footer />
      </Provider>
    </>
  );
}

export default App;
