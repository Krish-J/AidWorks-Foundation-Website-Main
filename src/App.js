import './App.css';
import {HashRouter as Router, Routes, Route} from "react-router-dom";
import Navbar from './components/Navbar.js';
import Home from './components/pages/homePage/Home.js';
import DonateMain from './components/pages/donatePage/donateMain.js';
import Footer from './components/footer.js';
import OurTeamMain from './components/pages/ourTeamPage/ourTeamMain.js';
import Contact from './components/pages/contactPage/contact.js';
import EventsMain from './components/pages/eventsPage/eventMain.js';
import BlogMain from './components/pages/blogPage/blogMain.js';
import ScrollToTop from './components/ScrollToTop.js';
import AidWorks5k from './components/pages/5kPage/aidWorks5kMain.js';


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
          <Route exact path='/events' element={<EventsMain/>}/>
          <Route exact path='/contact' element={<Contact/>}/>
          <Route exact path='/blog' element={<BlogMain/>}/>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
