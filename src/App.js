import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/pages/homePage/Home';
import DonateMain from './components/pages/donatePage/donateMain';
import Footer from './components/footer';

function App() {
  return (
    <div>
      <Router>
        <Navbar/>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/donate' element={<DonateMain/>}/>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
