import logo from './logo.svg';
import './App.css';
import {HashRouter as Router, Routes, Route} from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/pages/homePage/Home';
import DonateMain from './components/pages/donatePage/donateMain';
import Footer from './components/footer';
import OurTeamMain from './components/pages/ourTeamPage/ourTeamMain';
import ContactMain from './components/pages/contactPage/contactMain';
import BlogMain from './components/pages/blogPage/blogMain';
import ScrollToTop from './components/ScrollToTop';
import AidWorks5k from './components/pages/5kPage/aidWorks5kMain';
import Countdown from './components/pages/5kPage/countdown';

function App() {
  return (
    <div>
      <Router baseline="/">
        <Navbar/>
        <ScrollToTop/>
        <Routes>
          {/* <Route exact path='/' element={<AidWorks5k/>}/> */}
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/donate' element={<DonateMain/>}/>
          <Route exact path='/ourteam' element={<OurTeamMain/>}/>
          <Route exact path='/contact' element={<ContactMain/>}/>
          <Route exact path='/blog' element={<BlogMain/>}/>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
