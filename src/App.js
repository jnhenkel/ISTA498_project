import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from './components/navbar';
import Sidebar from './components/Sidebar';
import Disclaimer from './components/disclaimer';
import About from './components/About';
import Registration from './components/register';

function App() {
  return (
    <div id="app">
      <Router>
        <Disclaimer />
        <div id="blur">
          <Navbar />
          <Routes>
            <Route path='/' element={<About />} />
            <Route path='/about' element={<About />} />
            <Route path='/signup' element={<Registration />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
