import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navigation from './components/navbar';
import Sidebar from './components/Sidebar';
import Disclaimer from './components/disclaimer';
import About from './components/About';
import Registration from './components/register';
import Login from './components/login';
import {useState} from 'react';

function App() {
  const [user, setUser] = useState(undefined);

let handleLogin = (email) => {
  setUser(email);
}

  return (
    <div id="app">
      <Router>
        <Disclaimer />
        <div id="blur">
          <Navigation user={user} />
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
