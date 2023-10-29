import React from "react";
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';

import Landing from './Landing.jsx'
import SpeedTypingGame from './SpeedTypingGame.jsx';
// import useGaTracker from "./utils/useGATracker.js";


function App() {

  return (
    <div>
      <Router>
      <Routes>
        <Route path='/' exact element={<Landing />} />
        <Route path='/typing-test' element={<SpeedTypingGame />} />
      </Routes>
      </Router>
    </div>
  )
}

export default App;