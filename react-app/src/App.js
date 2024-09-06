import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Nav from './Components/Nav';
import Main from './Components/Main';

function App() {
  return (
    <>
    <div className="Header">
    <Header />
    <Nav />
    </div>
    <Main />
    <Footer />
    </>
  );
}

export default App;
