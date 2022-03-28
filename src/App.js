import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navigation from './components/navbar';
import Sidebar from './components/Sidebar';
import Disclaimer from './components/disclaimer';
import About from './components/About';
import Registration from './components/register';
import Login from './components/login';

function App() {
  return (
    <div id="app">
      <Router>
        <Disclaimer />
        <div id="blur">
          <Navigation />
          <Routes>
            <Route path='/' element={<About />} />
            <Route path='/about' element={<About />} />
            <Route path='/signup' element={<Registration />} />
            <Route path='/login' element={<Login />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
