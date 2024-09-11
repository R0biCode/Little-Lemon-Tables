import './App.css';
import {Routes, Route} from 'react-router-dom';
import HomePage from './Components/Homepage';
import AboutUs from './Components/About';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Nav from './Components/Nav';
import BookingPage from './Components/BookingPage';
function App() {
  return (
    <>
    <div className="Header">
          <Header />
          <Nav />
    </div>
      <Routes>
          <Route index element={ <HomePage /> } /> {/* Index is used for root elements. (/) */}
          <Route path="about" element={ <AboutUs /> } />
          <Route path="booking" element ={ <BookingPage /> } />
      </Routes>
      <div className="FooterBG">
          <Footer />
      </div>
    </>
  );
}

export default App;
