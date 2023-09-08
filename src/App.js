import './App.css'
import BookingPage from './components/BookingPage';
import ConfirmedBooking from './components/ConfirmedBooking';
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/reservation" element={<BookingPage />}></Route>
        <Route path="/confirmation" element={<ConfirmedBooking />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
