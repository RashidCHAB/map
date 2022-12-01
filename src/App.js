import './App.css';
import { Link, Route, Routes } from 'react-router-dom';

import Home from "./pages/Home"
import Features from "./pages/Features"
import Contact from "./pages/Contact"
import Notfound from "./pages/Notfound"
import { useState } from 'react';
function App() {
  let bool = false
  let bool2 = false
  let bool3 = false
  const [Homeline, setHome] = useState('falselink')
  const [Featuresline, setFeatures] = useState('falselink')
  const [Contactline, setContact] = useState('falselink')
  const rend = () => {
    setHome(bool ? 'truelink' : 'falselink')
    setFeatures(bool2 ? 'truelink' : 'falselink')
    setContact(bool3 ? 'truelink' : 'falselink')
  }
  const handleLine = (e) => {
    if (e.target.name === "1") {
      bool = true
      bool2 = false
      bool3 = false
      rend()
    }
    if (e.target.name === "2") {
      bool = false
      bool2 = true
      bool3 = false
      rend()
    }
    if (e.target.name === "3") {
      bool = false
      bool2 = false
      bool3= true
      rend()
    }
  }

  return (
    <div className="App">
      <header>
        <div className='cover'>Cover</div>
        <div className='links'>
          <Link className={Homeline} name="1" to="/" onClick={handleLine}>Home</Link>
          <Link className={Featuresline} name="2" to="/features" onClick={handleLine}>Features</Link>
          <Link className={Contactline} name="3"to="/contact" onClick={handleLine}>Contact</Link>
        </div>
      </header>
      <footer className='footer'>Сделано с любовью, <div className='footerP'>Россия</div> щедрая душа<div className='footerP'>@Nestlé</div></footer>






      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/features' element={<Features />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/notfound' element={<Notfound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
