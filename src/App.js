import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navigation from './components/navbar';
import Disclaimer from './components/disclaimer';
import About from './components/about';
import Registration from './components/register';
import Login from './components/login';
import { useState } from 'react';
import { Helmet } from 'react-helmet';
import Discover from './components/discover';
import Quiz from './components/quiz';


function App() {
  const [user, setUser] = useState(undefined);

  let handleLogin = (email) => {
    setUser(email);
  }

  return (
    <div id="app">
      <Helmet>
        <title>Art-Factory</title>
      </Helmet>
      <Router>
        <div id="blur">
          <Navigation user={user} />
          <Disclaimer />
          <Routes>
            <Route path='/art-factory' element={<About />} />
            <Route path='/' element={<About />} />
            <Route path='/about' element={<About />} />
            <Route path='/signup' element={<Registration />} />
            <Route path='/login' element={<Login userLoggedIn={handleLogin} />} />
            <Route path='/discover' element={<Discover />} />
            <Route path='/quiz' element={<Quiz />} user={user} key="quiz_key" />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
