import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navigation from './components/navbar';
import Sidebar from './components/Sidebar';
import Disclaimer from './components/disclaimer';
import About from './components/About';
import Registration from './components/register';
import Login from './components/login';
import { useState } from 'react';
import { Helmet } from 'react-helmet';
import Draw from './components/draw';


function App() {
  const [user, setUser] = useState(undefined);

  let handleLogin = (email) => {
    setUser(email);
  }

  return (
    <div id="app">
      <Helmet>
      <script src="https://cdn.jsdelivr.net/npm/p5@1.4.1/lib/p5.js"></script>
    <script src="./components/sketch.js"></script>
       <title>Art-Factory</title>
       
      </Helmet>      
      <canvas data-processing-sources="sketch.js"></canvas>
      <Router>
        
        <div id="blur">

          <Navigation user={user} />
          <Disclaimer />
          <Routes>
            <Route path='/' element={<About />} />
            <Route path='/about' element={<About />} />
            <Route path='/signup' element={<Registration />} />
            <Route path='/login' element={<Login userLoggedIn={handleLogin} />} />
            
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
