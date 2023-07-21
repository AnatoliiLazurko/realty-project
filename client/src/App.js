import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Buy from './components/Buy/Buy';
import Footer from './components/Footer/Footer';
import { Provider } from 'react-redux';
import { store } from './app/store';
import BuyDetails from './components/Buy/BuyDetails';
import Rent from './components/Rent/Rent';
import Sell from './components/Sell/Sell';
import PageNotExist from './components/PageNotExist';
import { AuthProvider } from './contexts/AuthContext';
import RentDetails from './components/Rent/RentDetails';

function App() {
  return (
    <>
      <Provider store={store}>
        <AuthProvider>
          <Header />

          <div className='content'>
            <Routes>
              <Route path="/" element={<Home />} />

              <Route path="/buy/:category" element={<Buy />} />
              <Route path='/buy/:category/:id/details' element={<BuyDetails />} />

              <Route path="/rent/:category" element={<Rent />} />
              <Route path='/rent/:category/:id/details' element={<RentDetails />} />

              <Route path='/sell' element={<Sell />} />
              
              <Route path="*" element={<PageNotExist />}/>
            </Routes>
          </div>

          <Footer />
        </AuthProvider>
      </Provider>
    </>
  );
}

export default App;
