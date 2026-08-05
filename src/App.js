import './App.css';
import {HashRouter as Router, Routes, Route} from "react-router-dom";
import {MotionConfig} from "motion/react";
import Navbar from './components/Navbar.js';
import Home from './components/pages/homePage/Home.js';
import DonateMain from './components/pages/donatePage/donateMain.js';
import Footer from './components/footer.js';
import OurTeamMain from './components/pages/ourTeamPage/ourTeamMain.js';
import Contact from './components/pages/contactPage/contact.js';
import EventsMain from './components/pages/eventsPage/eventMain.js';
import ScrollToTop from './components/ScrollToTop.js';


function App() {
  return (
    // reducedMotion="user" drops the rise/blur for visitors who ask for less
    // motion — content still fades in, so nothing stays hidden.
    <MotionConfig reducedMotion="user">
      <Router baseline="/">
        <Navbar/>
        <ScrollToTop/>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/donate' element={<DonateMain/>}/>
          <Route exact path='/ourteam' element={<OurTeamMain/>}/>
          <Route exact path='/events' element={<EventsMain/>}/>
          <Route exact path='/contact' element={<Contact/>}/>
        </Routes>
        <Footer/>
      </Router>
    </MotionConfig>
  );
}

export default App;
