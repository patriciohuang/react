import './App.css'
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import { Routes, Route } from 'react-router-dom';
import Reservation from './components/Reservation';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/reservation" element={<Reservation />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
